import { initialState, combineReducers } from './reducers'
import { AppStateProvider } from './contexts/appState'
import counterReducer from './reducers/counterReducer'
import randomReducer from './reducers/randomReducer'
import './App.css';
import Counter from './Counter';
import Random from './Random';

const appReducers = combineReducers({
  counter: counterReducer,
  random: randomReducer,
})

const App = () => {
  
  return (
    <AppStateProvider reducer={appReducers} initialState={initialState}>
      <div className="app">
        <Counter />
        <Random />
      </div>
    </AppStateProvider>
  );
}

export default App;
