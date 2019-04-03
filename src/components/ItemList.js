import React from 'react';

const ItemList = ({ active }) => (
  <ul>
    {
      active.map((todo, idx) => (
        <li key={idx}>{todo}</li>
        )
      )
    }
  </ul>
)


export default ItemList;
