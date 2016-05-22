import R from 'ramda';
import { combineReducers } from 'redux';
import {
  NEW_CARD_ADDED,
  NEW_GROUP_ADDED,
  GROUP_MOVED,
  CARD_MOVED,
  CARD_REMOVED,
} from '../actions';

function sortBySortIndex(arr) {
  return R.invoker(0, 'sort')(arr);
}

function getGroupIdForCardId(groupDict, cardId) {
  return R.compose(
    R.prop('groupId'),
    R.find(group => !!group.cards[cardId]),
    R.values,
    R.mapObjIndexed((val, key) => ({ ...val, groupId: key }))
  )(groupDict);
}

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

export function getNewSortIndexBetween(firstId, secondId = '') {
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


function getCardSortIndicesFromCards(groups) {
  return R.compose(
    sortBySortIndex,
    R.pluck('sortIndex'),
    R.values
  )(groups);
}

function getGroupSortIndicesFromGroups(groups) {
  return R.compose(
    R.sortBy(R.prop('sortIndex')),
    R.values,
    R.pick(['sortIndex', 'groupId']),
    R.mapObjIndexed((val, key) => ({ ...val, groupId: key }))
  )(groups);
}

function getNeighborSortIndex(sortIndexList, targetSortIndex, isBefore) {
  const idx = sortIndexList.indexOf(targetSortIndex);
  const offset = isBefore ? -1 : 1;
  return sortIndexList[idx + offset];
}

function getNewSortIndexForTarget(sourceGroupId, targetGroupId, isBefore, state) {
  // get sorted index list
  const sortedGroups = getGroupSortIndicesFromGroups(state);

  // get sort index of target
  const targetSortIndex = state[targetGroupId].sortIndex;
  const sourceSortIndex = state[sourceGroupId].sortIndex;

  // get sort index of either previous or next depending on before param
  const neighborSortIndex = getNeighborSortIndex(sortedGroups, targetSortIndex, isBefore);

  // if the trade would result in no change in order, keep the old sortIndex
  if (neighborSortIndex === sourceSortIndex) {
    return sourceSortIndex;
  }

  // generate new sort index that is between params
  return isBefore
    ? getNewSortIndexBetween(neighborSortIndex, targetSortIndex)
    : getNewSortIndexBetween(targetSortIndex, neighborSortIndex);
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
      const lastSortIndex = R.compose(R.last, getGroupSortIndicesFromGroups)(state);
      return {
        ...state,
        [action.payload.groupId]: {
          title: action.payload.title,
          sortIndex: getNewSortIndexBetween(lastSortIndex),
          cards: {},
        },
      };
    case GROUP_MOVED:
      return {
        ...state,
        [action.payload.sourceGroupId]: {
          ...state[action.payload.sourceGroupId],
          sortIndex: getNewSortIndexForTarget(action.payload.sourceGroupId, action.payload.targetGroupId, action.payload.isBefore, state),
        },
      };
    case CARD_REMOVED:
      const groupId = getGroupIdForCardId(state, action.payload.cardId);
      return {
        ...state,
        [groupId]: {
          ...state[groupId],
          cards: R.omit(action.payload.cardId, state[groupId].cards),
        },
      };
    default:
      return state;
  }
}

function getSortedCards(cards) {
  return R.compose(
    R.sortBy(R.prop('sortIndex')),
    R.values,
    R.mapObjIndexed((card, cardId) => ({ ...card, cardId })),
  )(cards);
}

export function selectCardGroups(state) {
  return R.compose(
    R.sortBy(R.prop('sortIndex')),
    R.values,
    R.mapObjIndexed((group, groupId) => ({ ...group, cards: getSortedCards(group.cards), groupId })),
  )(state);
}

export default cards;
