import { Appointment } from '../entities/appointment.entity';

export interface IAppointmentsRepository {
	create(appointment: Appointment): Promise<void>;
	findOverLappingAppointment(
		startsAt: Date,
		endsAt: Date
	): Promise<Appointment | null>;
}
