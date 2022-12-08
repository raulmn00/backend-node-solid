import { Appointment } from '../entities/appointment.entity';

interface ICreateAppointmentRequest {
	customer: string;
	startsAt: Date;
	endsAt: Date;
}
type ICreateAppointmentResponse = Appointment;

export class CreateAppointment {
	async execute({
		customer,
		startsAt,
		endsAt,
	}: ICreateAppointmentRequest): Promise<ICreateAppointmentResponse> {
		const appointment = new Appointment({ customer, startsAt, endsAt });
		return appointment;
	}
}
