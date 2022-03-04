import '../styles/list.css';
import { initialItems } from './db';

export default function ItemList() {
  return (
    <section className="list__container">
      <ul className="list" role="list">
        {initialItems.map((item) => (
          <ListItem
            key={item._id}
            name={item.name.en}
            //onDeleteItem={handleDeleteItem}
          />
        ))}
      </ul>
    </section>
  );

  function ListItem({ name, onDeleteItem }) {
    return (
      <li key={initialItems._id}>
        <button
          onClick={() => onDeleteItem(initialItems._id)}
          className="list__button"
        >
          {name}
        </button>
      </li>
    );
  }
}
