import { useState } from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

type Props = {
  id: string;
  title: string;
  onDelete: () => void;
  onEdit: (text: string) => void;
};

export default function Card({ id, title, onDelete, onEdit }: Props) {
  const [editing, setEditing] = useState(false);
  const [value, setValue] = useState(title);

  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div ref={setNodeRef} style={style} className="card" {...attributes} {...listeners}>
      <span className="card-bar" />
      {editing ? (
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onBlur={() => {
            setEditing(false);
            onEdit(value);
          }}
          autoFocus
        />
      ) : (
        <p onDoubleClick={() => setEditing(true)}>{title}</p>
      )}
      <button onClick={onDelete}>🗑</button>
    </div>
  );
}
