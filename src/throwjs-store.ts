import { BehaviorSubject, Observable } from "rxjs";

export interface ITodo {
  id: number;
  text: string;
  completed: boolean;
}

class StoreTodo {
  private _storeTodo$: BehaviorSubject<ITodo[]>;
  private _id: number;

  constructor() {
    this._storeTodo$ = new BehaviorSubject([]);
    this._id = 0;
  }

  get storeTodo$(): Observable<ITodo[]> {
    return this._storeTodo$.asObservable();
  }

  get id(): number {
    return this._id;
  }

  addTodo(todo: ITodo): void {
    this._storeTodo$.next([...this._storeTodo$.value, todo]);
    this._id++;
  }

  changeCompleted(id: number): void {
    const todos = this.todos().map(
      (todo): ITodo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    this._storeTodo$.next([...todos]);
  }

  deleteTodo(id: number): void {
    const todos = this.todos().filter((todo) => todo.id !== id);
    this._storeTodo$.next([...todos]);
  }

  private todos(): ITodo[] {
    return this._storeTodo$.getValue();
  }
}

const storeTodo = new StoreTodo();

export default storeTodo;
