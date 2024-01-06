import { IBaseSlideElement } from '~/model/project/slide/element/BaseSlideElement'

export const addTextElement = (newElement: IBaseSlideElement) => {
  return {
    payload: newElement,
    type: 'ADD_TEXT_ELEMENT',
  }
}

export const addShapeElement = (newElement: IBaseSlideElement) => {
  return {
    payload: newElement,
    type: 'ADD_SHAPE_ELEMENT',
  }
}

export const addImageElement = (newElement: IBaseSlideElement) => {
  return {
    payload: newElement,
    type: 'ADD_IMAGE_ELEMENT',
  }
}

export const deleteElement = (elementsId: string[]) => {
  return {
    index: elementsId,
    payload: [],
    type: 'REMOVE_ELEMENT',
  }
}

export const selectElement = (elementId: string) => ({
  payload: elementId,
  type: 'SELECT_ELEMENT',
})

export const deselectElement = (elementId: string) => ({
  payload: elementId,
  type: 'DESELECT_ELEMENT',
})

export const setElements = (elements: IBaseSlideElement[]) => {
  return {
    payload: elements,
    type: 'SET_ELEMENTS',
  }
}

export const removeAllElements = () => {
  return {
    payload: [],
    type: 'REMOVE_ALL',
  }
}

