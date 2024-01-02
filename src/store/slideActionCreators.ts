import { ISlide } from '~/model/project/slide/Slide'

export const removeSelectedSlides = () => {
  return { type: 'REMOVE_SELECTED_SLIDES' }
}

export const selectSlide = (slide: ISlide) => ({
  payload: slide,
  type: 'SELECT_SLIDE',
})

export const deselectSlide = (slide: ISlide) => ({
  payload: slide,
  type: 'DESELECT_SLIDE',
})

export const addSlide = (slides: ISlide) => ({
  payload: slides,
  type: 'ADD_SLIDE',
})