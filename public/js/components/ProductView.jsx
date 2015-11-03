import React from 'react';

import {
  Card,
  CardTitle,
  CardMedia,
  CardActions,
  RaisedButton
} from 'material-ui';

class ProductView extends React.Component {

  render() {
    let {image, name, price, color} = this.props.product;
    return (
      <Card className ="product-card">
        <CardMedia>
          <img src={image} />
        </CardMedia>
        <CardTitle title={`${name} - ${color}`} subtitle={`$ ${price}`} />
        <CardActions>
          <RaisedButton
            label="buy one"
            onClick={this.props.onBuy.bind(this, this.props.product)}/>
        </CardActions>
      </Card>
    );
  }
};

export default ProductView;
