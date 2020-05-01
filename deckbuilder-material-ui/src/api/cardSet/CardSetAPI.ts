import { PokemonTCG } from 'pokemon-tcg-sdk-typescript';
import { CardSet } from '../model/cardSet';

function findAllSets(): Promise<CardSet[]> {
    return PokemonTCG.Set.all();
}

export default {
    findAllSets
};
