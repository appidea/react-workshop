import React from 'react';
import './Fruit.css';

class Fruit extends React.Component {
  render () {
    const {name, fruitId, onRemove} = this.props;

    return (
      <div>
        {name}
        <button onClick={() => onRemove(fruitId)}>
          Remove
        </button>
      </div>
    )
  }
}

export default Fruit;
