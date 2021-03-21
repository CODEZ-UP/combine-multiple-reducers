const randomReducer = (state, action = {}) => {
  const { randomData, type } = action
  switch (type) {
    case 'RANDOM_ACTION': {
      return {
        ...state,
        random: { ...state.random, ...randomData },
      }
    }
    default:
      return state
  }
}

export default randomReducer