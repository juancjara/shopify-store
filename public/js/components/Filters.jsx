import React from 'react';

import {List, ListItem} from 'material-ui';

class Filters extends React.Component {
  handleClick(idx) {
    this.props.onClick(idx);
  }

  render() {

    let {title, values} = this.props.data;
    let items = values
      .map((item, i) => {
        return <ListItem
                 onClick={this.handleClick.bind(this, i)}
                 primaryText={item}
                 key={i} />
        });
    return (
      <div className="filters">
        <h2>{title}</h2>
        <List>{items}</List>
      </div>
    )
  }
};

export default Filters;
