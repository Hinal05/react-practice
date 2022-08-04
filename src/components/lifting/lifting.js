import React, {useState} from 'react';

import ListCount from './comp/listcount';
import List from './comp/list';
import AddList from './comp/addlist';

const Lifting = () => {
  const [ lists, setLists ] = useState(["item 1", "item 2", "item 3"]);
  return (
    <>
      <ListCount lists={lists} />
      <List lists={lists} />
      <AddList setLists={setLists} />
    </>
  )
}

export default Lifting;
