import { expect, test } from 'vitest';
import { Appointment } from './appointment.entity';

test('create an appointment', () => {
	const appointment = new Appointment({
		customer: 'Raul',
		startsAt: new Date(),
		endsAt: new Date(),
	});
	expect(appointment).toBeInstanceOf(Appointment);
	expect(appointment.customer).toEqual('Raul');
});
