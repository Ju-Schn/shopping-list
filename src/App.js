import { useState, useEffect } from 'react';
import './App.css';
import ItemList from './components/ItemList.js';
import Add from './components/Add.js';
import { initialItems } from './components/db.js';
import { nanoid } from 'nanoid';

function App() {
  const [items, setItems] = useState(loadFromLocal('items') ?? initialItems);

  useEffect(() => {
    saveToLocal('items', items);
  }, [items]);

  function loadFromLocal(key) {
    try {
      return JSON.parse(localStorage.getItem(key));
    } catch (error) {
      console.error(error);
    }
  }

  function saveToLocal(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
  }

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
