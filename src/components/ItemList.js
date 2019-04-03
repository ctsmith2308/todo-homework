import React from 'react';
import { connect } from 'react-redux';

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
