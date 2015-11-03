import React from 'react';

import {
  FlatButton,
  Table,
  TableHeader,
  TableRow,
  TableHeaderColumn,
  TableRowColumn,
  TableFooter,
  TableBody} from 'material-ui';

class ShoppingCart extends React.Component {
  onRemove(rowNumber) {
    this.props.onRemove(rowNumber);
  }

  render() {
    let items = this.props.cart.
      map(({name, price, amount}, i) => {
        return (
          <TableRow key={i}>
            <TableRowColumn>{name}</TableRowColumn>
            <TableRowColumn>{price}</TableRowColumn>
            <TableRowColumn>{amount}</TableRowColumn>
            <TableRowColumn>
                <FlatButton label="X" primary={true}/>
            </TableRowColumn>
          </TableRow>
        );
      });

    let total = this.props.cart.
      reduce((acc, {price, amount}) => {
        return acc + price*amount;
      } ,0);

    return(
      <div>
        <h3>Shopping Cart</h3>
        <Table onCellClick={this.onRemove.bind(this)}>
          <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
            <TableRow>
              <TableHeaderColumn>Product</TableHeaderColumn>
              <TableHeaderColumn>Price</TableHeaderColumn>
              <TableHeaderColumn>Amount</TableHeaderColumn>
              <TableHeaderColumn>X</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false}>
            {items}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableRowColumn colSpan="2">Total: </TableRowColumn>
              <TableRowColumn colSpan="2">{`$ ${total}`}</TableRowColumn>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    )
  }
}

export default ShoppingCart;
