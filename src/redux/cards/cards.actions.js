import CardActionTypes from './cards.types';

export const getData = ( ) => ({
    type: CardActionTypes.GET_DATA_CARDS
});

export const editCard = ( cardData ) => ({
    type: CardActionTypes.EDIT_CARD,
    payload: cardData
});

export const deleteCard = ( id ) => ({
    type: CardActionTypes.DELETE_CARD,
    payload: id
});

export const addCard = ( cardData ) => ({
    type: CardActionTypes.ADD_CARD,
    payload: cardData
});

export const selectCard = ( cardData ) => ({
    type: CardActionTypes.SELECTED_CARD,
    payload: cardData
});

export const clearSelectedCard = ( ) => ({
    type: CardActionTypes.CLEAR_SELECTED_CARD
});

export const orderByName = () => ({
    type: CardActionTypes.ORDER_BY_NAME
});

export const orderById = () => ({
    type: CardActionTypes.ORDER_BY_ID
});