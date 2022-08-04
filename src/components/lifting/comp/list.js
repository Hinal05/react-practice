import React from 'react';

const List = ({lists}) => {
  return (
    <ul>
      {lists.map((item) => {
        return <li key={item}>{item}</li>
      })}
    </ul>
  );
}

export default List;
