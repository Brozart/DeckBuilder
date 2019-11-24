import { DeckListActionTypes } from './DeckListTypes';
import { Card } from '../../api/model/card';

export interface CardItem {
    id: string;
    card: Card;
    count: number;
}

export interface DeckListState {
    cards: CardItem[];
    name: string;
}

const initialState: DeckListState = {
    cards: [],
    name: ''
};

function isCardContained(cards: CardItem[], cardToAdd: Card): boolean {
    return cards.filter(item => item.id === cardToAdd.id).length === 1;
}

function addCards(state: DeckListState, cardToAdd: Card, count: number): DeckListState {
    if (isCardContained(state.cards, cardToAdd)) {
        return {
            ...state,
            cards: state.cards.map(item => {
                if (item.id !== cardToAdd.id) {
                    return item;
                }

                return {
                    ...item,
                    count: item.count + count
                };
            })
        };
    } else {
        const cardItems = state.cards.slice();
        cardItems.push({
            id: cardToAdd.id,
            card: cardToAdd,
            count
        });
        return {
            ...state,
            cards: cardItems
        };
    }
}

function isCountHigherThan(cards: CardItem[], card: Card, count: number): boolean {
    return cards.filter(item => item.id).every(item => item.count > count);
}

function removeCards(state: DeckListState, cardToRemove: Card, count: number): DeckListState {
    if (isCardContained(state.cards, cardToRemove) && isCountHigherThan(state.cards, cardToRemove, count)) {
        return {
            ...state,
            cards: state.cards.map(item => {
                if (item.id !== cardToRemove.id) {
                    return item;
                }

                return {
                    ...item,
                    count: item.count - count
                };
            })
        };
    } else {
        return {
            ...state,
            cards: state.cards.filter(item => item.id !== cardToRemove.id)
        };
    }
}

export function deckListReducer(state = initialState, action: DeckListActionTypes): DeckListState {
    switch (action.type) {
        case 'ADD_CARD':
            return addCards(state, action.card, action.count);
        case 'REMOVE_CARD':
            return removeCards(state, action.card, action.count);
        default:
            return state;
    }
}
