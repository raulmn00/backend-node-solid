import { describe, expect, it } from 'vitest';
import { Appointment } from '../entities/appointment.entity';
import { CreateAppointment } from './createAppointment';

describe('create new appointment', () => {
	it('should be able to create an appointment', () => {
		const startsAt = new Date();
		const endsAt = new Date();

		endsAt.setDate(endsAt.getDate() + 1);
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
