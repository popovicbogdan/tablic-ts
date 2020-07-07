import { card } from './cardsReducer';

export const START_GAME = 'START_GAME';
export const ADD_OR_REMOVE_FROM_CURRENT_SELECTION =
  'ADD_OR_REMOVE_FROM_CURRENT_SELECTION';
export const COLLECT_CARDS = 'COLLECT_CARDS';
export const ADD_CARD_TO_TABLE = 'ADD_CARD_TO_TABLE';
export const DEAL_CARDS = 'DEAL_CARDS';
export const COMP_PLAY = 'COMP_PLAY';
export const GET_REST_OF_CARDS = 'GET_REST_OF_CARDS';
export const FINISH_GAME = 'FINISH_GAME';

type startGame = {
  type: typeof START_GAME;
};

type dealCards = {
  type: typeof DEAL_CARDS;
};

type addOrRemoveFromCurrentSelection = {
  type: typeof ADD_OR_REMOVE_FROM_CURRENT_SELECTION;
  card: card;
};

type collectCards = {
  type: typeof COLLECT_CARDS;
  card: card;
};

type addToTable = {
  type: typeof ADD_CARD_TO_TABLE;
  card: card;
};

type compPlay = {
  type: typeof COMP_PLAY;
};

type giveRestOfTableCardsToLastToCollect = {
  type: typeof GET_REST_OF_CARDS;
};

type finishGame = {
  type: typeof FINISH_GAME;
};

export const startGame = (): startGame => ({
  type: START_GAME
});

export const dealCards = (): dealCards => ({
  type: DEAL_CARDS
});

export const addOrRemoveFromCurrentSelection = (
  card: card
): addOrRemoveFromCurrentSelection => ({
  type: ADD_OR_REMOVE_FROM_CURRENT_SELECTION,
  card
});

export const collectCards = (card: card): collectCards => ({
  type: COLLECT_CARDS,
  card
});

export const addToTable = (card: card): addToTable => ({
  type: ADD_CARD_TO_TABLE,
  card
});

export const compPlay = (): compPlay => ({
  type: COMP_PLAY
});

export const giveRestOfTableCardsToLastToCollect = (): giveRestOfTableCardsToLastToCollect => ({
  type: GET_REST_OF_CARDS
});

export const finishGame = (): finishGame => ({
  type: FINISH_GAME
});

export type Actions =
  | startGame
  | dealCards
  | addOrRemoveFromCurrentSelection
  | collectCards
  | addToTable
  | compPlay
  | giveRestOfTableCardsToLastToCollect
  | finishGame;
