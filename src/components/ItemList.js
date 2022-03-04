import '../styles/list.css';
import ListItem from './listItem.js';

export default function ItemList({ items, onDeleteItem }) {
  return (
    <ul className="list">
      {items.map((item) => {
        return (
          <ListItem key={item._id} item={item} deleteItem={onDeleteItem} />
        );
      })}
    </ul>
  );
}
