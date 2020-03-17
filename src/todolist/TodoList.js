import React from 'react';
import TodoApp from './TodoApp';
import TodoHeader from './TodoHeader';
import TodoForm from './TodoForm';
import TodoListItem from './TodoListItem';

var todoItems = [];
todoItems.push({index: 1, value: "Learn React", done: false});
todoItems.push({index: 2, value: "Watch React Videos", done: true});
todoItems.push({index: 3, value: "Practise more and more", done: true});
todoItems.push({index: 4, value: "Refer some sites", done: true});

class TodoList extends React.Component {
  render () {
    var items = this.props.items.map((item, index) => {
      return (
        <TodoListItem key={index} item={item} index={index} removeItem={this.props.removeItem} markTodoDone={this.props.markTodoDone} />
      );
    });
    return (
      <ul className="list-group"> {items} </ul>
    );
  }
}

// ReactDOM.render(<TodoApp initItems={todoItems}/>, document.getElementById('app'));

export default TodoList;