import React from 'react';
import ReactDOM, { render } from 'react-dom';

import TodoList from 'components/TodoList';

const todos = [
  { text: 'laundry', completed: false },
  { text: 'dishes', completed: false },
  { text: 'sweeping', completed: false }
];

render(
  <div>
    <TodoList
      todos={ todos } 
      onTodoClick={ (index) => console.log('clicked', index) } />
  </div>,
  document.getElementById('content')
)