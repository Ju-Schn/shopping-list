export default function ListItem({ item, deleteItem }) {
  return (
    <li onClick={() => deleteItem(item._id)} className="list__button">
      {item.name.en}
    </li>
  );
}
