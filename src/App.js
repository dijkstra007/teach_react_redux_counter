import React, { Component } from "react";
import Header from "./components/Header";
import Counter from "./components/Counter";
import configureStore from "./store/configureStore";
import { Provider } from "react-redux";

const store = configureStore();

class App extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   counter: 0,
    // }
  }
  onAddHandler = () => {
    // this.setState({counter: this.state.counter + 1})
    // this.props.counter = this.props.counter + 1
  };
  onMinusHandler = () => {
    // this.setState({counter: this.state.counter - 1 })
  };
  render() {
    const bb = { name: "Mint", age: 23 };
    return (
      <Provider store={store}>
        <div>
          <Header user={bb} />
          <p> This is my body </p>
          <Counter
            number={0}
            // onAdd={this.onAddHandler}
            // onMinus={this.onMinusHandler}
          />
          <h1>My Footer</h1>
        </div>
      </Provider>
    );
  }
}

export default App;
