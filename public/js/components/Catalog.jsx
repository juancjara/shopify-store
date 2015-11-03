import React from 'react';
import _ from 'lodash';

import Filters from './Filters.jsx';
import ShoppingCart from './ShoppingCart.jsx';
import Products from './Products.jsx';

class Catalog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      colorFilter: {
        title: 'filter by color',
        values: ['All', 'Blue', 'Red']
      },
      cart: []
    }
  }

  componentDidMount() {
    $.getJSON('/products').
      done(({products}) => {
        this.setState({products});
      });
  }


  filterByColor(idx) {
    let color = this.state.colorFilter.values[idx];
    $.getJSON('/products/filter/'+ color).
      done(({products}) => {
        this.setState({products});
      });
  }

  addToCart({name, price}) {
    let cart = this.state.cart;
    let idx = _.findIndex(cart, (product) => {
      return product.name === name;
    });
    if (idx !== -1) {
      cart[idx].amount++;
    } else {
      cart.push({name, price, amount: 1});
    }
    this.setState({cart});
  }

  removeFromCart(idx) {
    let cart = this.state.cart;
    cart.splice(idx, 1);
    this.setState({cart});
  }

  render() {
    return (
      <div>
        <Filters
          onClick={this.filterByColor.bind(this)}
          data={this.state.colorFilter}/>
        <Products
          data={this.state.products}
          onBuy={this.addToCart.bind(this)}/>
        <ShoppingCart
          onRemove={this.removeFromCart.bind(this)}
          cart={this.state.cart} />
      </div>
    )
  }
};

export default Catalog;
