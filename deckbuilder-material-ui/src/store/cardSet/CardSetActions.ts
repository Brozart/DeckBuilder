import { Dispatch } from 'redux';
import CardSetAPI from 'api/cardSet';
import { CardSet } from 'api/model/cardSet';
import { CARD_SETS_LOADED } from './CardSetTypes';

export function loadCardSets() {
    return (dispatch: Dispatch): Promise<void | CardSet[]> => {
        return CardSetAPI.findAllSets().then(cardSets => {
            dispatch({
                type: CARD_SETS_LOADED,
                cardSets
            });
        });
    };
}
