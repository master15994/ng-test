export interface ITodo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export class Todo implements ITodo {
  userId!: number;
  id!: number;
  title!: string;
  completed!: boolean;

  constructor(data: ITodo) {
    Object.assign(this, data);
  }
}
