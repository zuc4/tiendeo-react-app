import { createSelector } from 'reselect';

const selectVisibility = ( state ) => state.modal;

export const selectModalVisibility = createSelector(
    [ selectVisibility ],
    ( modal ) => modal.show
);