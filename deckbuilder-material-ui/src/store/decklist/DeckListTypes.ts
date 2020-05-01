import { Card } from 'api/model/card';

export const ADD_CARD = 'ADD_CARD';
export const REMOVE_CARD = 'REMOVE_CARD';

export interface AddCardAction {
    type: typeof ADD_CARD;
    card: Card;
    count: number;
}

export interface RemoveCardAction {
    type: typeof REMOVE_CARD;
    card: Card;
    count: number;
}

export type DeckListActionTypes = AddCardAction | RemoveCardAction;
