import {
  NEW_CARD_ADDED,
} from './actions';

export function addNewCard(group, text) {
  const cardId = String(Math.round(Math.random() * 1000));
  return {
    type: NEW_CARD_ADDED,
    payload: {
      group,
      cardId,
      text,
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
