export class CreateTaskDto {
  constructor(model: any) {
    this.id = model.id;
    this.completed = model.completed;
    this.title = model.title;
    this.description = model.description;
    this.date = model.date;
    this.user = model.user;
  }
  readonly id: string;
  readonly completed: boolean;
  readonly title: string;
  readonly description: string;
  readonly date: string;
  readonly user: string;
}
