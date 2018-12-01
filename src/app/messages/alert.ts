export class Alert {
  type: AlertType;
  message: string;
  alertId: string;
  keepAfterRouteChange: boolean = true;

  constructor(init?:Partial<Alert>) {
      Object.assign(this, init);
  }
}

export enum AlertType {
  success,
  danger,
  info,
  warning
}