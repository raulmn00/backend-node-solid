import { expect, test } from 'vitest';
import { getFutureDate } from '../tests/utils/getFutureDate';
import { Appointment } from './appointment.entity';

test('create an appointment', () => {
	const startsAt = getFutureDate('2020-01-10');
	const endsAt = getFutureDate('2020-01-11');

	endsAt.setDate(endsAt.getDate() + 1);
	const appointment = new Appointment({
		customer: 'Raul',
		startsAt,
		endsAt,
	});
	expect(appointment).toBeInstanceOf(Appointment);
	expect(appointment.customer).toEqual('Raul');
});

test('cannot create an appointment with end date before start date', () => {
	const startsAt = getFutureDate('2020-01-10');
	const endsAt = getFutureDate('2020-01-09');

	endsAt.setDate(endsAt.getDate() - 1);
	expect(() => {
		return new Appointment({
			customer: 'Raul',
			startsAt,
			endsAt,
		});
	}).toThrow();
});
test('cannot create an appointment with start date before now', () => {
	const startsAt = new Date();
	const endsAt = new Date();

	endsAt.setDate(endsAt.getDate() + 3);
	startsAt.setDate(startsAt.getDate() - 1);
	expect(() => {
		return new Appointment({
			customer: 'Raul',
			startsAt,
			endsAt,
		});
	}).toThrow();
});
