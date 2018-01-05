const counterDefaultState = {
  counter: 0
};

const counterReducer = (state = counterDefaultState, action) => {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        counter: state.counter + 1
      };
    case "MINUS":
      return {
        ...state,
        counter: state.counter - 1
      };
    default:
      return state;
  }
};


export default counterReducer;
