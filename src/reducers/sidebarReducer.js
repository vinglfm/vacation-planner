import * as types from '../actions/actionTypes';

export default function sidebarReducer(state = -1, action) {
  switch(action.type) {
    case types.ITEM_SELECTED:
      return action.index;
    default:
      return state;
  }
}
