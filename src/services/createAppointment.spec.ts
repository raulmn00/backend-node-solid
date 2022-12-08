import { describe, expect, it } from 'vitest';
import { Appointment } from '../entities/appointment.entity';
import { getFutureDate } from '../tests/utils/getFutureDate';
import { CreateAppointment } from './createAppointment';

describe('create new appointment', () => {
	it('should be able to create an appointment', () => {
		const startsAt = getFutureDate('2020-01-10');
		const endsAt = getFutureDate('2020-01-11');

		const createAppointment = new CreateAppointment();

		expect(
			createAppointment.execute({
				customer: 'Raul',
				startsAt,
				endsAt,
			})
		).resolves.toBeInstanceOf(Appointment);
	});
});
