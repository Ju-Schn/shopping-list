import { useState } from 'react';
import './App.css';
import ItemList from './components/ItemList.js';
import Add from './components/Add.js';
import { initialItems } from './components/db.js';
import { nanoid } from 'nanoid';

function App() {
  const [items, setItems] = useState(initialItems);

  function handleDeleteItem(itemId) {
    setItems(items.filter((item) => item._id !== itemId));
  }

  function handleAddItem(itemName) {
    const newItem = {
      _id: nanoid(),
      name: { en: itemName, de: '' },
    };
    setItems([...items, newItem]);
  }
  return (
    <>
      <Add onAddItem={handleAddItem} />
      <ItemList items={items} onDeleteItem={handleDeleteItem} />
    </>
  );
}

export default App;
