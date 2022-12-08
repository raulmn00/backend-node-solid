import { areIntervalsOverlapping } from 'date-fns';
import { Appointment } from '../../entities/appointment.entity';
import { IAppointmentsRepository } from '../appointmentRepository';

export class InMemoryRepositories implements IAppointmentsRepository {
	public appointments: Appointment[] = [];
	async create(appointment: Appointment): Promise<void> {
		this.appointments.push(appointment);
	}

	async findOverLappingAppointment(
		startsAt: Date,
		endsAt: Date
	): Promise<Appointment | null> {
		const overLappingAppointment = this.appointments.find((appointment) => {
			return areIntervalsOverlapping(
				{ start: startsAt, end: endsAt },
				{ start: appointment.startsAt, end: appointment.endsAt },
				{ inclusive: true }
			);
		});
		if (!overLappingAppointment) {
			return null;
		} else {
			return overLappingAppointment;
		}
	}
}
