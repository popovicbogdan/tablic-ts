import { createSelector } from 'reselect';
import { card, reducerState } from './cardsReducer';

export const selectState = (state): reducerState => state.cardsReducer;

export const selectCards = createSelector(
  selectState,
  ({ cards }): Array<card> => cards
);

export const selectTableCards = createSelector(
  selectState,
  ({ table }): Array<card> => table
);

export const selectPlayerHand = createSelector(
  selectState,
  ({ player }): Array<card> => player.hand
);

export const selectComprHand = createSelector(
  selectState,
  ({ comp }): Array<card> => comp.hand
);

export const selectCurrentSelection = createSelector(
  selectState,
  ({ currentSelection }): Array<card> => currentSelection
);

export const selectareHandsEmpty = createSelector(
  selectPlayerHand,
  selectComprHand,
  (playerCards, compCards): boolean => !playerCards.length && !compCards.length
);

export const selectNoCardsLeft = createSelector(
  selectareHandsEmpty,
  selectCards,
  (areHandsEmpty, cards): boolean => areHandsEmpty && !cards.length
);
