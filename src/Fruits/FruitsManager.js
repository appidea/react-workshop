import React from 'react';
import './FruitsManager.css';

class FruitsManager extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      fruits: [],
      inputFruitText: ''
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
      </div>
    )
  }
}

export default FruitsManager;
