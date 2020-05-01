import { CardSet } from 'api/model/cardSet/CardSet';
import { CardSetAction } from './CardSetTypes';

export type CardSetState = CardSet[];

const initialState: CardSetState = [];

export function cardSetReducer(state = initialState, action: CardSetAction): CardSetState {
    switch (action.type) {
        case 'CARD_SETS_LOADED':
            return action.cardSets;
        default:
            return state;
    }
}
