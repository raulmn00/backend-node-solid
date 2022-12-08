import { Appointment } from '../entities/appointment.entity';
import { IAppointmentsRepository } from '../repositories/appointmentRepository';

interface ICreateAppointmentRequest {
	customer: string;
	startsAt: Date;
	endsAt: Date;
}
type ICreateAppointmentResponse = Appointment;

export class CreateAppointment {
	constructor(private appointmentsRepository: IAppointmentsRepository) {}

	async execute({
		customer,
		startsAt,
		endsAt,
	}: ICreateAppointmentRequest): Promise<ICreateAppointmentResponse> {
		const overLappingAppointment =
			await this.appointmentsRepository.findOverLappingAppointment(
				startsAt,
				endsAt
			);
		if (overLappingAppointment) {
			throw new Error(
				'Another appointment overlaps this appointment date'
			);
		}

		const appointment = new Appointment({ customer, startsAt, endsAt });
		await this.appointmentsRepository.create(appointment);
		return appointment;
	}
}
