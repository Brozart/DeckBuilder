import { combineReducers } from 'redux';
import { deckListReducer } from './decklist';
import { DeckListState } from './decklist/DeckListReducer';

export interface AppState {
    deckList: DeckListState;
}

export default combineReducers({
    deckList: deckListReducer
});
