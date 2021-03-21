import './App.css';
import { useAppState } from './contexts/appState'

const handleRandomData = (dispatch, value) => {
  dispatch({ type: 'RANDOM_ACTION', randomData: { value }})
}

const Random = () => {
  const [ state, dispatch ] = useAppState()
  return (
      <div className="random">
        <p>Random: {state.random?.value }</p>
        <button onClick={() => handleRandomData(dispatch, (Math.round(Math.random()*100)))}>Generate Random Number</button>
      </div>
  );
}

export default Random;
