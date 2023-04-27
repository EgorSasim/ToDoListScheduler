import { Task } from 'src/tasks/tasks.typings';

export const TASKS: Task[] = [
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
