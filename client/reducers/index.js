import R from 'ramda';
import { combineReducers } from 'redux';
import {
  NEW_CARD_ADDED,
  NEW_GROUP_ADDED,
} from '../actions';

// recursively check characters at each level to check if they are the same
// as soon as they are not the same, check the next char on the firstId
// increment by 1 (treat undefined as 0 and use 'a')
// 
// when incrementing characters, treat > Z by adding Za
// 
// when firstId is null, append space to id and start at 'a'
//
// abc
// abd
//
function incrementChar(char) {
  const charCode = char.charCodeAt(0);
  return String.fromCharCode(charCode + 1);
}

function getNextCharCode(char) {
  if (!char) {
    return 'a';
  }

  if (char === 'Z') {
    return 'Za';
  }

  return incrementChar(char);
}

export function getNewIdBetween(firstId, secondId = '') {
  if (!firstId) {
    return secondId.substring(0, secondId.length - 1) + ' a';
  }

  for (let i = 0; i < firstId.length; i++) {
    if (firstId[i] !== secondId[i]) {
      return firstId.substring(0, i + 1) + getNextCharCode(firstId[i + 1]);
    }
  }
  throw new Error('SAME_ID');
}

function cards(state = {}, action) {
  switch(action.type) {
    case NEW_CARD_ADDED:
      return {
        ...state,
        [action.payload.groupId]: {
          ...state[action.payload.groupId],
          cards: {
            ...state[action.payload.groupId].cards,
            [action.payload.cardId]: {
              text: action.payload.text,
            },
          },
        },
      };
    case NEW_GROUP_ADDED:
      return {
        ...state,
        [action.payload.groupId]: {
          name: action.payload.groupName,
          cards: {},
        },
      };
    default:
      return state;
  }
}

export function selectAvailableItemsInStore(state) {
  return R.values(state);
}

export default cards;
