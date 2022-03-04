import '../styles/add.css';
import { useState } from 'react';

export default function Add({ onAddItem }) {
  const [itemName, setItemName] = useState('');
  return (
    <>
      <label className="add__sr-only">Insert Item</label>
      <input
        placeholder="Add item here"
        value={itemName}
        onChange={(e) => setItemName(e.target.value)}
      />
      <button
        onClick={() => {
          setItemName('');
          onAddItem(itemName);
        }}
      >
        Add
      </button>
    </>
  );
}
