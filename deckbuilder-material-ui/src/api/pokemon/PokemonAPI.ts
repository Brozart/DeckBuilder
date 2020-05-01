import { Card, SuperType } from 'api/model/card';
import { PokemonTCG } from 'pokemon-tcg-sdk-typescript';
import { CardSet } from '../model/cardSet';

function searchPokemon(searchText: string, sets: CardSet[]): Promise<Card[]> {
    return PokemonTCG.Card.where([
        { name: 'name', value: searchText },
        { name: 'supertype', value: SuperType.POKEMON },
        { name: 'setCode', value: sets.map(set => set.code).join('|') }
    ]);
}

function searchTrainer(searchText: string, sets: CardSet[]): Promise<Card[]> {
    return PokemonTCG.Card.where([
        { name: 'name', value: searchText },
        { name: 'supertype', value: SuperType.TRAINER },
        { name: 'setCode', value: sets.map(set => set.code).join('|') }
    ]);
}

function searchEnergy(searchText: string, sets: CardSet[]): Promise<Card[]> {
    return PokemonTCG.Card.where([
        { name: 'name', value: searchText },
        { name: 'supertype', value: SuperType.ENERGY },
        { name: 'setCode', value: sets.map(set => set.code).join('|') }
    ]);
}

export default {
    searchPokemon,
    searchTrainer,
    searchEnergy
};
