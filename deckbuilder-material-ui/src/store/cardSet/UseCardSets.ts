import { CardSetLegalType, CardSet } from 'api/model';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadCardSets } from './CardSetActions';
import { selectCardSets } from './CardSetSelectors';

function useCardSets(legality: CardSetLegalType): CardSet[] {
    const cardSets = useSelector(selectCardSets(legality));
    const dispatch = useDispatch();

    const action = (): void => {
        dispatch(loadCardSets());
    };
    useEffect(action, []);

    return cardSets;
}

export default useCardSets;
