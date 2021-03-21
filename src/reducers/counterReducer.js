const counterReducer = (state, action = {}) => {
  const { type } = action
  switch (type) {
    case 'INCREMENT': {
      return {
        ...state,
        counter: state.counter + 1,
      }
    }
    case 'DECREMENT': {
      return {
        ...state,
        counter: state.counter - 1,
      }
    }
    default:
      return state
  }
}

export default counterReducer