import cardsActionTypes from './cards.types';
import { CARDS_DATA } from './cards.data';

import { editCard, orderByName, orderById } from './cards.utils';

const INITIAL_STATE = {
    cards: [],
    currentCard: []
};

const cardsReducer = ( state = INITIAL_STATE, action ) => {
    
    switch ( action.type ) {
        case cardsActionTypes.GET_DATA_CARDS:
          return {
              ...state,
              cards: CARDS_DATA
          }
        case cardsActionTypes.ADD_CARD:
          return {
              ...state,
              cards: state.cards.concat(action.payload),
              currentCard: []
          }
        case cardsActionTypes.EDIT_CARD:
            return {
                ...state,
                cards: editCard( state.cards, action.payload ),
                currentCard: []
            }
        case cardsActionTypes.DELETE_CARD:
            return {
                ...state,
                cards: state.cards.filter(
                    cardItem => cardItem.id !== action.payload
                )
            }
        case cardsActionTypes.SELECTED_CARD:
            return {
                ...state,
                currentCard: action.payload
            }
        case cardsActionTypes.CLEAR_SELECTED_CARD:
            return {
                ...state,
                currentCard: []
            }
        case cardsActionTypes.ORDER_BY_NAME:
            return {
                ...state,
                cards: orderByName( state.cards )
            }
        case cardsActionTypes.ORDER_BY_ID:
            return {
                ...state,
                cards: orderById( state.cards )
            }
        default:
            return state;  
    }
};

export default cardsReducer;

