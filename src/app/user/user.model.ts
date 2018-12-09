export class Credentials  {
  userName: string;
  password: string;
}

export interface IUser  {
  id: number;
  userName: string;
  status: boolean;
  errorMessage: string;
}