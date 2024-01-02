import { combineReducers } from 'redux'
import elementReducer from './elementReducer'
import selectedElementsReducer from './selectReducer'

export const rootReducer = combineReducers( {
  elementReducer,
  selectedElements: selectedElementsReducer,
})

export type RootState = ReturnType<typeof rootReducer>