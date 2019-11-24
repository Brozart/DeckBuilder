import { Card, SuperType } from 'api/model/card';
import { PokemonTCG } from 'pokemon-tcg-sdk-typescript';

function searchPokemon(searchText: string): Promise<Card[]> {
    return PokemonTCG.Card.where([
        { name: 'name', value: searchText },
        { name: 'supertype', value: SuperType.POKEMON }
    ]);
}

function searchTrainer(searchText: string): Promise<Card[]> {
    return PokemonTCG.Card.where([
        { name: 'name', value: searchText },
        { name: 'supertype', value: SuperType.TRAINER }
    ]);
}

function searchEnergy(searchText: string): Promise<Card[]> {
    return PokemonTCG.Card.where([
        { name: 'name', value: searchText },
        { name: 'supertype', value: SuperType.ENERGY }
    ]);
}

export default {
    searchPokemon,
    searchTrainer,
    searchEnergy
};
