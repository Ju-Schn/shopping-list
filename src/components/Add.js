import '../styles/add.css';

export default function Add() {
  return (
    <>
      <label className="add__sr-only">Insert Item</label>
      <input placeholder="Add item here"></input>
      <button>Add</button>
    </>
  );
}
