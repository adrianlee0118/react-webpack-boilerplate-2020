import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from './actions';

class Counter extends React.Component {
  // state = { count: 0 };  //removed; state is in store now

  increment = () => {
    /* this.setState({     //from react without redux; state is not in store
      count: this.state.count + 1,
    }); */
    // this.props.dispatch({ type: INCREMENT });    //dispatch function from actions instead of scripted here in reducer
    // this.props.dispatch(increment());    //call functions from imported dispatch
    this.props.increment(); // call functions from imported dispatch mapped to props!
  };

  decrement = () => {
    /* this.setState({
      count: this.state.count - 1,
    }); */
    // this.props.dispatch({ type: DECREMENT });
    // this.props.dispatch(decrement());
    this.props.decrement();
  };

  // this.state.count -> this.props.count; global state in redux store, render by passing as props to component
  render() {
    return (
      <div className="counter">
        <h2>Counter</h2>
        <div>
          <button onClick={this.decrement}>-</button>
          <span className="count">{this.props.count}</span>
          <button onClick={this.increment}>+</button>
        </div>
      </div>
    );
  }
}

// Connect this component to count property in redux store global state
const mapStateToProps = (state) => ({
  count: state.count,
});

// Add dispatch keys to props in addition to state
const mapDispatchToProps = {
  increment,
  decrement,
};

// export default Counter;   //instead of simply exporting counter, export redux-connected counter
// export default connect(mapStateToProps)(Counter);
export default connect(mapStateToProps, mapDispatchToProps)(Counter); // export redux-connected counter with state, dispatch inside props
