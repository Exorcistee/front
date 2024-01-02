import { IBaseSlideElement } from '~/model/project/slide/element/BaseSlideElement'

interface ElementState {
  elements: IBaseSlideElement[];
}

const initialState: ElementState = { elements: [] }

interface Action {
  type: string;
  payload: IBaseSlideElement;
  index?: string;
}

const elementsReducer = (state = initialState, action: Action) => {
  switch (action.type) {
  case 'ADD_TEXT_ELEMENT':
  case 'ADD_SHAPE_ELEMENT':
  case 'ADD_IMAGE_ELEMENT':
    return {
      ...state,
      elements: [...state.elements, action.payload],
    }
  case 'REMOVE_ELEMENT': {
    const idsToRemove = new Set(action.index)
    return {
      ...state,
      elements: state.elements.filter(element => !idsToRemove.has(element.id)),
    }
  }
  default:
    return state
  }

}

export default elementsReducer