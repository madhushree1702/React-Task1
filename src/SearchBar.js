import React from 'react';
import Products from './Products';
import EditableCell from './EditableCell';
import ProductRow from './ProductRow';
import ProductTable from './ProductTable';

class SearchBar extends React.Component {
    handleChange() {
      this.props.onUserInput(this.refs.filterTextInput.value);
    }
    render() {
      return (
        <div>
  
          <input type="text" placeholder="Search..." value={this.props.filterText} ref="filterTextInput" onChange={this.handleChange.bind(this)}/>
  
        </div>
  
      );
    }
  
  }

  export default SearchBar;
  