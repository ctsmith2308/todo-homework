import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Todo from './Todo';

const Navigation = () => (
  <BrowserRouter>
    <Route exact path="/" component={Todo}/>
  </BrowserRouter>
)
export default Navigation;
