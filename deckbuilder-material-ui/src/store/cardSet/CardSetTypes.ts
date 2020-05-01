import { CardSet } from 'api/model/cardSet';

export const CARD_SETS_LOADED = 'CARD_SETS_LOADED';

export interface CardSetLoadedAction {
    type: typeof CARD_SETS_LOADED;
    cardSets: CardSet[];
}

export type CardSetAction = CardSetLoadedAction;
