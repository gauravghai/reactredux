const INITIAL_STATE = 0;

const test = (state = INITIAL_STATE, action) => {
    switch(action.type) {
      case "INC" : return state + 1;
      case "DEC" : return state - 1;
      default: return state;
    }
}

export default test;