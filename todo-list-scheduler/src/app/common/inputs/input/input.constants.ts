export enum InputTypes {
  Button = 'button',
  Checkbox = 'checkbox',
  Color = 'color',
  Date = 'date',
  DateTimeLocal = 'datetime-local',
  Email = 'email',
  File = 'file',
  Hidden = 'hidden',
  Image = 'image',
  Month = 'month',
  Number = 'number',
  Password = 'password',
  Radio = 'radio',
  Range = 'range',
  Reset = 'reset',
  Search = 'search',
  Submit = 'submit',
  Tel = 'tel',
  Text = 'text',
  Time = 'time',
  Url = 'url',
  Week = 'week',
}

export interface InputError {
  error: string;
  description: string;
}