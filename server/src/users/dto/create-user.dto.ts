export class CreateUserDto {
  constructor(model: any) {
    this.login = model.login;
    this.password = model.password;
    this.id = model.id;
  }
  readonly login: string;
  readonly password: string;
  readonly id: number;
}
