import React, { Component, PropTypes } from 'react';

import Todo from 'components/Todo';


class TodoList extends Component {

  render() {

    const { todos, onTodoClick } = this.props;

    return (
      <ol>
        {
          todos.map((todo, i) => {
            return <Todo
                      todo={ todo }
                      onClick={ () => this.props.onTodoClick(i) }
                      key={ i } />
          })
        }
      </ol>
    )
  }
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
  }).isRequired).isRequired,
  onTodoClick: PropTypes.func.isRequired
}

export default TodoList;