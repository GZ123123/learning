export interface ITodoItem {
  id: string,
  title: string,
  description: string
}

export interface ITodoCreateItem extends Omit<ITodoItem, 'id'> {

}

export interface ITodoService {
  getTodos(): ITodoItem[]
  getTodo(id: string): ITodoItem | undefined
  createTodo(todo: ITodoCreateItem): boolean
  updateTodo(id: string, todo: ITodoCreateItem): boolean
  removeTodo(id: string): boolean
}
