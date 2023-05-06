import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { FormData } from 'src/app/common/typings/typings';
import { TaskForm } from 'src/app/tasks/task/task.typings';

export function convertTaskDataArrayToReactiveFormArray(
  tasks: FormData<TaskForm>[]
): FormArray<FormGroup<TaskForm>> {
  const formArray = new FormArray([]);

  tasks.forEach((task) =>
    formArray.push(
      new FormGroup({
        id: new FormControl(task.id),
        completed: new FormControl(task.completed),
        title: new FormControl(task.title),
        description: new FormControl(task.description),
        date: new FormControl(task.date),
      })
    )
  );
  return formArray;
}

export function convertTaskDataToReactiveForm(
  task: FormData<TaskForm>
): FormGroup<TaskForm> {
  return new FormGroup({
    id: new FormControl(task.id),
    completed: new FormControl(task.completed),
    title: new FormControl(task.title),
    description: new FormControl(task.description),
    date: new FormControl(task.date),
  });
}
