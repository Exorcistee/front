import { combineReducers } from 'redux'
import elementReducer from './elementReducer'
import projectSlidesReducer from './slideReducer'
import selectedElementsReducer from './selectReducer'

export const rootReducer = combineReducers({
  elementReducer,
  projectSlides: projectSlidesReducer,
  selectedElements: selectedElementsReducer,
})

export type RootState = ReturnType<typeof rootReducer>