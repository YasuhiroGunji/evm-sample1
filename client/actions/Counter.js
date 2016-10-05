import * as types from '../constants/ActionType.js'

export function increments() {
  return { type: types.INCREMENT };
}

export function decremente() {
  return { type: types.DECREEMENT };
}