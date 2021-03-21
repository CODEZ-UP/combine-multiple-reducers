import './App.css';
import { useAppState } from './contexts/appState'

const handleCountIncrement = (dispatch) => {
  dispatch({ type: 'INCREMENT' })
}

const handleCountDecrement = (dispatch) => {
  dispatch({ type: 'DECREMENT' })
}

const Counter = () => {
  const [ state, dispatch ] = useAppState()
  return (
    <>
      <p>Counter: {state.counter }</p>
      <div className="counter">
        <button onClick={() => handleCountIncrement(dispatch)}>+</button>
        <button onClick={() => handleCountDecrement(dispatch)}>-</button>
      </div>
      </>
  );
}

export default Counter;
