import React from 'react';
import InputPropsWrapper from '../propsWrappers/inputPropsWrapper';
import ListPropsWrapper from '../propsWrappers/listPropsWrapper';
import FooterPropsWrapper from '../propsWrappers/footerPropsWrapper';
import { BrowserRouter, Route } from 'react-router-dom';

const TodoRouter = () => (
  <BrowserRouter>
    <div className='todo-container'>
      <Route path="/" component={InputPropsWrapper}/>
      <Route path="/" component={ListPropsWrapper}/>
      <Route exact path="/#/all" component={ListPropsWrapper}/>
      <Route exact path="/#/active" component={ListPropsWrapper}/>
      <Route exact path="/#/completed" component={ListPropsWrapper}/>
      <Route path="/" component={FooterPropsWrapper}/>
    </div>
  </BrowserRouter>
)

export default TodoRouter;
