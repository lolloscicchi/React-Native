export interface Todo {
  id: string;
  title: string;
  description?: string;
}

export const todoListData: Todo[] = [
  {
    id: '1729607633',
    title: 'Mele',
  },
  {
    id: '1729607723',
    title: 'Pere',
    description: 'Compra le mele',
  },
];
