import { createSelector } from 'reselect';

const selectData = ( state ) => state.cards;

export const selectCardsData = createSelector(
    [ selectData ],
    ( cards ) => cards
);

export const selectCurrentCardData = createSelector(
    [ selectData ],
    ( cards ) => cards.currentCard
);

