import { Injectable } from '@nestjs/common';
import { Task } from 'src/tasks/tasks.typings';

@Injectable()
export class TasksService {
  public TASKS: Task[] = [
    {
      id: 1,
      completed: true,
      title: 'WOW',
      description: 'Worl of Warcraft',
      date: new Date(),
    },
    {
      id: 2,
      completed: false,
      title: 'Wash the car',
      description: 'wash my car tomorrow',
      date: new Date('1997-01-01'),
    },
    {
      id: 3,
      completed: true,
      title: 'bring my life back',
      description:
        "Do smth with my life, I don't know how, but I must do it or die",
      date: new Date('2002-10-02'),
    },
  ];

  public getTasks(): Task[] {
    return this.TASKS;
  }

  public removeTask(id: number): void {
    const index: number = this.TASKS.map((task) => task.id).findIndex(
      (task_id) => task_id == id,
    );
    console.log('index: ', index);
    if (index != -1 && index != undefined && index != null) {
      this.TASKS.splice(index, 1);
    }
  }
}
