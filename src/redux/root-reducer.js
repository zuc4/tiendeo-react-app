import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import cardsReducer from './cards/cards.reducer';
import modalReducer from './modal/modal.reducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cards']    
}

const rootReducer = combineReducers({
    cards: cardsReducer,
    modal: modalReducer
});

export default persistReducer( persistConfig, rootReducer );
// export default rootReducer;