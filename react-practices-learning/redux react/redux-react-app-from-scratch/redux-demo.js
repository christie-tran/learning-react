const redux = require('redux');

// Reducer Function
const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === 'INCREMENT') {
    return {
      counter: state.counter + 1
    }
  } else if (action.type === 'DECREMENT') {
    return {
      counter: state.counter - 1
    }
  }
  return state;
}

// store data passing the reducer function as an argument
const store = redux.createStore(counterReducer);

// Subscription from the store to the components
const counterSubScriber = () => {
  // using .getState() to get the latest state of the store
  const latestState = store.getState();

  console.log(latestState);
}

// using .subscribe() to sending the state from the store to the components by passing the subscription function as an argument
store.subscribe(counterSubScriber);

// dispatching the action from the components to the reducer function
store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'DECREMENT' });
