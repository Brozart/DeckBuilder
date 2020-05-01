import { combineReducers } from 'redux';
import { CardSetState, cardSetReducer } from './cardSet/CardSetReducer';
import { DeckListState, deckListReducer } from './decklist/DeckListReducer';
import { SecretSantaState, secretSantaReducer } from './secretSanta/SecretSantaReducer';

export interface AppState {
    pokemon: {
        deckList: DeckListState;
        cardSets: CardSetState;
    };
    secretSanta: SecretSantaState;
}

export default combineReducers({
    pokemon: combineReducers({
        deckList: deckListReducer,
        cardSets: cardSetReducer
    }),
    secretSanta: secretSantaReducer
});
