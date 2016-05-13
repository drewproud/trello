import {
  CARD_ADD_BUTTON_CLICKED,
} from './actions';

export function addCardButtonClicked(group, cardId, text) {
  return {
    type: CARD_ADD_BUTTON_CLICKED,
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
