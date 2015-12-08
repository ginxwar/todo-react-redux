import React, { Component } from 'react';

import TodoList from 'components/TodoList';


class App extends Component {

  render() {

    const todos = [
      { text: 'laundry', completed: false },
      { text: 'dishes', completed: false },
      { text: 'sweeping', completed: false }
    ];

    return (
      <div>
        <TodoList
          todos={ todos } 
          onTodoClick={ (index) => console.log('clicked', index) } />
      </div>
    )
    
  }

}

export default App;