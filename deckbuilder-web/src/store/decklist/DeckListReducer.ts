import { DeckList, newDeckList, DeckListItem, Card } from 'api/model';
import { DeckListActionTypes } from './DeckListTypes';

export interface DeckListState {
    deckList: DeckList;
}

const initialState: DeckListState = {
    deckList: newDeckList()
};

function isDeckListItemContained(items: DeckListItem[], cardToAdd: Card): boolean {
    return items.filter(item => item.id === cardToAdd.id).length === 1;
}

function addCards(state: DeckListState, cardToAdd: Card, count: number): DeckListState {
    if (isDeckListItemContained(state.deckList.items, cardToAdd)) {
        return {
            ...state,
            deckList: {
                ...state.deckList,
                items: state.deckList.items.map(item => {
                    if (item.id !== cardToAdd.id) {
                        return item;
                    }

                    return {
                        ...item,
                        count: item.count + count
                    };
                })
            }
        };
    } else {
        const newItems = state.deckList.items.slice();
        newItems.push({
            id: cardToAdd.id,
            card: cardToAdd,
            count
        });
        return {
            ...state,
            deckList: {
                ...state.deckList,
                items: newItems
            }
        };
    }
}

function isCountHigherThan(items: DeckListItem[], card: Card, count: number): boolean {
    return items.filter(item => item.id).every(item => item.count > count);
}

function removeCards(state: DeckListState, cardToRemove: Card, count: number): DeckListState {
    if (
        isDeckListItemContained(state.deckList.items, cardToRemove) &&
        isCountHigherThan(state.deckList.items, cardToRemove, count)
    ) {
        return {
            ...state,
            deckList: {
                ...state.deckList,
                items: state.deckList.items.map(item => {
                    if (item.id !== cardToRemove.id) {
                        return item;
                    }

                    return {
                        ...item,
                        count: item.count - count
                    };
                })
            }
        };
    } else {
        return {
            ...state,
            deckList: {
                ...state.deckList,
                items: state.deckList.items.filter(item => item.id !== cardToRemove.id)
            }
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
