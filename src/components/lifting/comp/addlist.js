import React from 'react';

const AddList = ({setLists}) => {
  function handleSubmit(event) {
    event.preventDefault();
    const list = event.target.elements.todo.value;
    setLists(prevList => [...prevList,list]);
  }
  return(
    <form onSubmit={handleSubmit}>
      <input type="text" id="todo" />
      <button type='submit'>Add Todo</button>
    </form>
  )
}

export default AddList;
