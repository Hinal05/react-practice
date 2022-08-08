import React, {useState} from "react";
import data from '../data';
import {nanoid} from "nanoid";

const ListContext = React.createContext();

export const ListProvider = (props) => {

  const [items, setItems] = useState(data);
  const [addItem, setAddItem] = useState({
    name: '',
    country: ''
  });

  const handleChange = (event) => {
    event.preventDefault();
    const fieldName = event.target.getAttribute('name');
    const fieldValue = event.target.value;
    const newData = {...addItem};
    newData[fieldName] = fieldValue;
    setAddItem(newData);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const newItem = {
      id: nanoid(),
      name: addItem.name,
      country: addItem.country,
    }
    const newItems = [...items, newItem];
    setItems(newItems);
  }

  return (
    <ListContext.Provider value={{items, addItem, handleChange, handleSubmit}}>
      {props.children}
    </ListContext.Provider>
  )
}
export default ListContext;