import { ColumnType } from './types'

export const initialColumns: ColumnType[] = [
  {
    id: 'todo',
    title: 'Todo',
    cards: [
      { id: 't1', title: 'Create initial project plan' },
      { id: 't2', title: 'Design landing page' },
    ],
  },
  {
    id: 'progress',
    title: 'In Progress',
    cards: [{ id: 'p1', title: 'Implement authentication' }],
  },
  {
    id: 'done',
    title: 'Done',
    cards: [{ id: 'd1', title: 'Write API documentation' }],
  },
]
