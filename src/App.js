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
    setItems([...items, { _id: nanoid(), name: itemName }]);
  }
  return (
    <>
      <Add onAddItem={handleAddItem} />
      <ItemList items={items} onDeleteItem={handleDeleteItem} />
    </>
  );
}

export default App;
