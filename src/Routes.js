import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// import Table from './Table';
import Products from './Products';
import EditableCell from './EditableCell';
import ProductRow from './ProductRow';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          {/* <Route exact path='/login' component={Login} />  */}
          {/* <Route exact path='/' component={List} /> */}
          {/* // <Route exact path='/' component={Blog} /> */}
          {/* <Route exact path='/' component={test1} /> */}
          {/* <Route exact path='/TodoList' component={TodoList} />
          <Route exact path='/TodoApp' component={TodoApp} />
          <Route exact path='/TodoHeader' component={TodoHeader} />
          <Route exact path='/TodoForm' component={TodoForm} />
          <Route exact path='/TodoListItem' component={TodoListItem} /> */}
          {/* <Route exact path='/Form' component={Form} />
          <Route exact path='/Home' component={Home} /> */}
          {/* <Route exact path='/Table' component={Table} />
          <Route exact path='/TableOne' component={TableOne} /> */} 
          {/* <Route exact path='/Table' component={Table} /> */}                  
          <Route exact path='/Products' component={Products} />
          <Route exact path='/EditableCell' component={EditableCell} />
          <Route exact path='/ProductRow' component={ProductRow} />
          <Route exact path='/ProductTable' component={ProductTable} />
          <Route exact path='/SearchBar' component={SearchBar} />
        </Switch>
      </BrowserRouter>
    );
  }
}
export default Routes;