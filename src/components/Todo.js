import React, { Component, PropTypes } from 'react';

class Todo extends Component {

  render() {
    const { todo, onClick } = this.props;

    return (
      <li
        onClick={ onClick }
        style={{
          textDecoration: todo.completed ? 'line-through': 'none'
        }}>
        { todo.text }
      </li>
    )
  }
}

Todo.propTypes = {
  todo: PropTypes.shape({
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
  }).isRequired,
  onClick: PropTypes.func.isRequired
}

export default Todo;