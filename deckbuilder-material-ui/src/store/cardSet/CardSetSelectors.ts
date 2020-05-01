import { CardSet, CardSetLegalType } from 'api/model';
import { AppState } from '../reducer';

export function selectCardSets(legality: CardSetLegalType): (state: AppState) => CardSet[] {
    return (state: AppState): CardSet[] => {
        switch (legality) {
            case CardSetLegalType.STANDARD:
                return state.pokemon.cardSets.filter(set => set.standardLegal);
            case CardSetLegalType.EXPANDED:
                return state.pokemon.cardSets.filter(set => set.expandedLegal);
            case CardSetLegalType.UNLIMITED:
            default:
                return state.pokemon.cardSets;
        }
    };
}
