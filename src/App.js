import { useState } from 'react';
import './App.css';
import ItemList from './components/ItemList.js';
import Add from './components/Add.js';
import { initialItems } from './components/db.js';

function App() {
  const [items, setItems] = useState(initialItems);
  function handleDeleteItem(itemId) {
    setItems(items.filter((item) => item._id !== itemId));
  }
  return (
    <>
      <Add />
      <ItemList initialItems={items} onDeleteItem={handleDeleteItem} />
    </>
  );
}

export default App;
