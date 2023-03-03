import React from 'react';
import InputForm from './InputForm';
import AverageDisplay from './AverageDisplay';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number1: '',
      number2: '',
      average: null,
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const calculatedAverage = (Number(this.state.number1) + Number(this.state.number2)) / 2;
    this.setState({ average: calculatedAverage });
  };

  handleNumber1Change = (event) => {
    this.setState({ number1: event.target.value });
  };

  handleNumber2Change = (event) => {
    this.setState({ number2: event.target.value });
  };

  render() {
    return (
      <div>
        <InputForm
          number1={this.state.number1}
          number2={this.state.number2}
          onNumber1Change={this.handleNumber1Change}
          onNumber2Change={this.handleNumber2Change}
          onSubmit={this.handleSubmit}
        />
        {this.state.average && (
          <AverageDisplay
            number1={this.state.number1}
            number2={this.state.number2}
            average={this.state.average}
          />
        )}
      </div>
    );
  }
}

export default App;
