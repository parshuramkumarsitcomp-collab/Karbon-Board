import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
import Card from "./Card";
import { CardType } from "../types";

type Props = {
  id: string;
  title: string;
  cards: CardType[];
  addCard: () => void;
  deleteCard: (cardId: string) => void;
  editCard: (cardId: string, text: string) => void;
};

export default function Column({
  id,
  title,
  cards,
  addCard,
  deleteCard,
  editCard,
}: Props) {
  return (
    <div className={`column ${id}`}>
      <div className="column-header">
        <span>{title} <small>{cards.length}</small></span>
        <button onClick={addCard}>＋</button>
      </div>

      <button className="add-card" onClick={addCard}>
        + Add Card
      </button>

      <SortableContext
        items={cards.map((c) => c.id)}
        strategy={verticalListSortingStrategy}
      >
        {cards.map((card) => (
          <Card
            key={card.id}
            id={card.id}
            title={card.title}
            onDelete={() => deleteCard(card.id)}
            onEdit={(text) => editCard(card.id, text)}
          />
        ))}
      </SortableContext>
    </div>
  );
}
