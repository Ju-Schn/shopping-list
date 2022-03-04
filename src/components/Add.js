import '../styles/add.css';
import { useState } from 'react';

export default function Add({ onAddItem }) {
  const [itemName, setItemName] = useState('');
  return (
    <>
      <label htmlFor="add-item">Type here what you want to buy:</label>
      <input
        id="add-item"
        value={itemName}
        onChange={(event) => setItemName(event.target.value)}
      />
      <button
        onClick={() => {
          onAddItem(itemName);
          setItemName('');
        }}
      >
        Add
      </button>
    </>
  );
}
