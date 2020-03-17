import React from 'react';
import Editable from './EditableCell';
import ProductRow from './ProductRow';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

class Products extends React.Component {

    constructor(props) {
      super(props);
  
      //  this.state.products = [];
      this.state = {};
      this.state.filterText = "";
      this.state.products = [
        {
          id: 1,
          category: 'Electronics',
          price: '64900',
          qty: 11,
          name: 'iPhone 11'
        }, {
          id: 2,
          category: 'Electronics',
          price: '15000',
          qty: 13,
          name: 'RedMi 5'
        }, {
          id: 3,
          category: 'Electronics',
          price: '10000',
          qty: 14,
          name: 'Moto'
        }, {
          id: 4,
          category: 'Electronics',
          price: '29000',
          qty: 12,
          name: 'iPhone 5s'
        }
      ];
  
    }
    handleUserInput(filterText) {
      this.setState({filterText: filterText});
    };
    handleRowDel(product) {
      var index = this.state.products.indexOf(product);
      this.state.products.splice(index, 1);
      this.setState(this.state.products);
    };
  
    handleAddEvent(evt) {
      var id = (+ new Date() + Math.floor(Math.random() * 999999)).toString(36);
      var product = {
        id: id,
        name: "",
        price: "",
        category: "",
        qty: 0
      }
      this.state.products.push(product);
      this.setState(this.state.products);
  
    }
  
    handleProductTable(evt) {
      var item = {
        id: evt.target.id,
        name: evt.target.name,
        value: evt.target.value
      };
      var products = this.state.products;
  
      var newProducts = products.map(function(product) {
        for (var key in product) {
          if (key == item.name && product.id == item.id) {
            product[key] = item.value;
  
          }
        }
        return product;
      });
      this.setState(newProducts);
      console.log(this.state.products);
    };
    render() {
  
      return (
        <div>
          <SearchBar filterText={this.state.filterText} onUserInput={this.handleUserInput.bind(this)}/>
          <ProductTable onProductTableUpdate={this.handleProductTable.bind(this)} onRowAdd={this.handleAddEvent.bind(this)} onRowDel={this.handleRowDel.bind(this)} products={this.state.products} filterText={this.state.filterText}/>
        </div>
      );
  
    }
  
  }
  
    
export default Products;