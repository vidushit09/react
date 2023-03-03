import React from 'react';

class InputForm extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.onSubmit}>
        <label>
          Number 1:
          <input
            type="number"
            value={this.props.number1}
            onChange={this.props.onNumber1Change}
          />
        </label>
        <br />
        <label>
          Number 2:
          <input
            type="number"
            value={this.props.number2}
            onChange={this.props.onNumber2Change}
          />
        </label>
        <br />
        <button type="submit">Calculate Average</button>
      </form>
    );
  }
}

export default InputForm;
