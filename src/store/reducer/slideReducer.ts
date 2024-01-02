import { IProjectSlides } from '~/model/project/Project'
import { ISlide } from '~/model/project/slide/Slide'

const initialState: IProjectSlides = {
  selectedSlides: [],
  slides: [],
}

export interface SlideAction {
  type: string;
  payload: ISlide;
}

const slideReducer = (state: IProjectSlides = initialState, action: SlideAction) => {
  switch (action.type) {
  case 'SELECT_SLIDE': {
    return {
      ...state,
      selectedSlides: [...state.selectedSlides, state.slides.findIndex(slide => slide.id === action.payload.id)],
    }
  }
  case 'DESELECT_SLIDE': {
    return {
      ...state,
      selectedSlides: state.selectedSlides.filter(index => state.slides[index].id !== action.payload.id),
    }
  }
  case 'REMOVE_SELECTED_SLIDES': {
    const slidesToRemove = new Set(state.selectedSlides)
    return {
      ...state,
      selectedSlides: [],
      slides: state.slides.filter((_, i) => !slidesToRemove.has(i)),
    }
  }
  case 'ADD_SLIDE': {
    return {
      ...state,
      slides: state.slides.concat(action.payload),
    }
  }
  default:
    return state
  }
}

export default slideReducer