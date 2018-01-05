import React from "react";
import { connect } from 'react-redux';
import { addCounter, minusCounter } from '../action/counter';

const Counter = (props) => {
  return (
    <div>
      <h1>{props.counter}</h1>
      <button onClick={props.dispatchAddCounter}> + </button>
      <button onClick={props.dispatchMinusCounter}> - </button>
    </div>
  );
};

const mapStateToProps  = (state) => {
    return {
        counter: state.counter
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        dispatchAddCounter: () => dispatch( addCounter() ),
        dispatchMinusCounter: () => dispatch( minusCounter() )
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Counter);
