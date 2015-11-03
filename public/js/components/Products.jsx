import React from 'react';

import ProductView from './ProductView.jsx';

class Products extends React.Component {
  render() {
    let items = this.props.data
      .map((product, i) => {
        return <ProductView
                 onBuy={this.props.onBuy}
                 product={product}
                 key={i}/>
      });
    return (
      <div className="products">
        {items}
      </div>
    )
  }
};

export default Products;
