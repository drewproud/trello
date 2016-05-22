import {
  NEW_CARD_ADDED,
  NEW_GROUP_ADDED,
  GROUP_MOVED,
  CARD_MOVED,
} from './actions';

export function addNewCard(groupId, text) {
  const cardId = String(Math.round(Math.random() * 1000));
  return {
    type: NEW_CARD_ADDED,
    payload: {
      groupId,
      cardId,
      text,
    },
  };
}

export function addNewCardGroup(title) {
  const groupId = String(Math.round(Math.random() * 1000));
  return {
    type: NEW_GROUP_ADDED,
    payload: {
      groupId,
      title,
    },
  };
}

export function moveGroup(sourceGroupId, targetGroupId, isBefore) {
  return {
    type: GROUP_MOVED,
    payload: {
      sourceGroupId,
      targetGroupId,
      isBefore,
    },
  };
}

export function editCardButtonClicked(cardId) {
  return {
    type: 'test',
    payload: {
      cardId,
    },
  };
}

export function saveCardClicked(cardId) {
  return {
    type: 'test',
    payload: {
      cardId,
    },
  };
}
