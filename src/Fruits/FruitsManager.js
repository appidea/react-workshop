import React from 'react';
import Fruit from './Fruit';
import './FruitsManager.css';

class FruitsManager extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      fruits: []
    };
  }

  addFruit () {
    this.setState({
      fruits: [
        ...this.state.fruits,
        this.state.inputFruitText
      ],
      inputFruitText: ''
    });
  }

  removeFruit (inputKey) {
    this.setState({
      fruits: this.state.fruits.filter((el, key) => key !== inputKey)
    })
  }

  setInputFruitText (text) {
    this.setState({
      inputFruitText: text
    })
  }

  render () {
    return (
      <div className="fruits-manager">
        Welcome to Fruits Manager

        <div>
          <input type="text"
                 value={this.state.inputFruitText}
                 onChange={(event) => this.setInputFruitText(event.target.value)} />

          <button onClick={() => this.addFruit()}>
            Add
          </button>
        </div>
        <div>
          { this.state.fruits.map((fruit, index) =>
            <Fruit key={index}
                   name={fruit}
                   fruitId={index}
                   onRemove={(key) => this.removeFruit(key)} />
          ) }
        </div>
      </div>
    )
  }
}

export default FruitsManager;
