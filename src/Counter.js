import React from 'react';
import { increment, decrement } from './actions';
import { connect } from 'react-redux';

//Class that access the global state
class Counter extends React.Component {
  //Functions: send dispatch requests (as outlined in actions) to reducer functions
  increment = () => {
    this.props.increment();
  };

  decrement = () => {
    this.props.decrement();
  };

  render() {
    return (
      <div className="counter">
        <h2>Counter</h2>
        <div>
          <button onClick={this.decrement}>-</button>
          <span className="count"> Count: {this.props.count} </span>
          <button onClick={this.increment}>+</button>
        </div>
      </div>
    );
  }
}

// Connect this component to count property in redux store global state; call with this.props.count instead of this.state.count with Counter as a class in plain React
const mapStateToProps = (state) => ({
  count: state.count,
});

// Add dispatch keys to props in addition to state - can call this.props.function() instead of this.props.dispatch(function())
const mapDispatchToProps = {
  increment,
  decrement,
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
