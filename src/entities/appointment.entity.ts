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
		this.props = props;
	}
}
