import { DeckListItem } from './DeckListItem';

export interface DeckList {
    items: DeckListItem[];
    name: string;
}

export const newDeckList = (): DeckList => ({
    items: [],
    name: ''
});
