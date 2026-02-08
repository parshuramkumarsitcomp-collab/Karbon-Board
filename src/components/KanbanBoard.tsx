import { DndContext, DragEndEvent } from '@dnd-kit/core'
import { arrayMove } from '@dnd-kit/sortable'
import { useState } from 'react'
import Column from './Column'
import { initialColumns } from '../data'
import { ColumnType } from '../types'

export default function KanbanBoard() {
  const [columns, setColumns] = useState<ColumnType[]>(initialColumns)

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event
    if (!over) return

    setColumns(cols => {
      const source = cols.find(c => c.cards.some(card => card.id === active.id))
      const target = cols.find(c => c.cards.some(card => card.id === over.id))
      if (!source || !target) return cols

      const sourceIndex = source.cards.findIndex(c => c.id === active.id)
      const targetIndex = target.cards.findIndex(c => c.id === over.id)

      if (source === target) {
        source.cards = arrayMove(source.cards, sourceIndex, targetIndex)
      } else {
        const [moved] = source.cards.splice(sourceIndex, 1)
        target.cards.splice(targetIndex, 0, moved)
      }
      return [...cols]
    })
  }

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div className="board">
        {columns.map(col => (
          <Column
            key={col.id}
            {...col}
            addCard={() =>
              setColumns(cols =>
                cols.map(c =>
                  c.id === col.id
                    ? { ...c, cards: [...c.cards, { id: Date.now().toString(), title: 'New Task' }] }
                    : c
                )
              )
            }
            deleteCard={(id) =>
              setColumns(cols =>
                cols.map(c =>
                  c.id === col.id ? { ...c, cards: c.cards.filter(card => card.id !== id) } : c
                )
              )
            }
            editCard={(id, text) =>
              setColumns(cols =>
                cols.map(c =>
                  c.id === col.id
                    ? {
                        ...c,
                        cards: c.cards.map(card =>
                          card.id === id ? { ...card, title: text } : card
                        ),
                      }
                    : c
                )
              )
            }
          />
        ))}
      </div>
    </DndContext>
  )
}
