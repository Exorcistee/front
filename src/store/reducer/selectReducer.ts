const initialState = new Set()

interface Action {
  type: string;
  payload?: string;
}

const selectedElementsReducer = (state = initialState, action: Action) => {
  switch (action.type) {
  case 'SELECT_ELEMENT': {
    return new Set([...state, action.payload])
  }
  case 'DESELECT_ELEMENT': {
    const newState = new Set(state)
    newState.delete(action.payload)
    return newState
  }
  case 'REMOVE_ALL': {
    return new Set([])
  }
  default:
    return state
  }
}

export default selectedElementsReducer