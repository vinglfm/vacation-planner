import * as types from './actionTypes';

export function selectItem(index) {
  return {type: types.ITEM_SELECTED, index};
}
