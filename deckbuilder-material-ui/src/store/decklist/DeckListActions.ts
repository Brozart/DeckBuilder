import { Card } from 'api/model/card';
import { ADD_CARD, AddCardAction, REMOVE_CARD, RemoveCardAction } from './DeckListTypes';

export function addCard(card: Card, count = 1): AddCardAction {
    return {
        type: ADD_CARD,
        card,
        count
    };
}

export function removeCard(card: Card, count = 1): RemoveCardAction {
    return {
        type: REMOVE_CARD,
        card,
        count
    };
}
