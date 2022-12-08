import { describe, expect, it } from 'vitest';
import { Appointment } from '../entities/appointment.entity';
import { InMemoryRepositories } from '../repositories/inMemory/inMemoryRepositories';
import { getFutureDate } from '../tests/utils/getFutureDate';
import { CreateAppointment } from './createAppointment';

describe('create new appointment', () => {
	it('should be able to create an appointment', () => {
		const startsAt = getFutureDate('2020-01-10');
		const endsAt = getFutureDate('2020-01-11');

		const appointmentRepository = new InMemoryRepositories();

		const createAppointment = new CreateAppointment(appointmentRepository);

		expect(
			createAppointment.execute({
				customer: 'Raul',
				startsAt,
				endsAt,
			})
		).resolves.toBeInstanceOf(Appointment);
	});
	it('should not be able to create an appointment with overlapping dates', async () => {
		const startsAt = getFutureDate('2020-08-10');
		const endsAt = getFutureDate('2020-08-15');

		const appointmentRepository = new InMemoryRepositories();

		const createAppointment = new CreateAppointment(appointmentRepository);

		await createAppointment.execute({
			customer: 'Raul',
			startsAt,
			endsAt,
		});

		expect(
			createAppointment.execute({
				customer: 'Raul',
				startsAt: getFutureDate('2020-08-14'),
				endsAt: getFutureDate('2020-08-18'),
			})
		).rejects.toBeInstanceOf(Error);

		expect(
			createAppointment.execute({
				customer: 'Raul',
				startsAt: getFutureDate('2020-08-08'),
				endsAt: getFutureDate('2020-08-12'),
			})
		).rejects.toBeInstanceOf(Error);
	});
});
