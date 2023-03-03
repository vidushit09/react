import React from 'react';

class AverageDisplay extends React.Component {
  render() {
    return (
      <div>
        <p>
          The average of {this.props.number1} and {this.props.number2} is {this.props.average}.
        </p>
      </div>
    );
  }
}

export default AverageDisplay;
