import { INCREMENTS, DECREMENTS } from '../constants/ActionType'

const initState = {
  value: 0
}


export default function counter(state=initState, action) {
  switch (action.type) {
    case INCREMENTS:
      return { value: state.value + 1 }
    case DECREMENTS:
      return { value: state.value -1 }
    default:
      return state
  }
}