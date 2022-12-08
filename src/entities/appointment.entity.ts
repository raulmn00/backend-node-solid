export interface IAppointmentProps {
	customer: string;
	startsAt: Date;
	endsAt: Date;
}

export class Appointment {
	private props: IAppointmentProps;

	public get customer(): string {
		return this.props.customer;
	}
	public get startsAt(): Date {
		return this.props.startsAt;
	}
	public get endsAt(): Date {
		return this.props.endsAt;
	}
	constructor(props: IAppointmentProps) {
		const { startsAt, endsAt } = props;
		if (startsAt < new Date()) {
			throw new Error('Invalid start date.');
		}
		if (endsAt <= startsAt) {
			throw new Error('Invalid end date.');
		}
		this.props = props;
	}
}
