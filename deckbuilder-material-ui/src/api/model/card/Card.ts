import { Ability } from './Ability';
import { Attack } from './Attack';
import { Resistance } from './Resistance';
import { Weakness } from './Weakness';

export interface Card {
    ability: Ability;
    artist: string;
    attacks: Attack[];
    convertedRetreatCost: number;
    evolvesFrom: string;
    hp: string;
    id: string;
    imageUrl: string;
    imageUrlHiRes: string;
    name: string;
    nationalPokedexNumber: number;
    number: string;
    rarity: string;
    resistances: Resistance[];
    retreatCost: string[];
    series: string;
    set: string;
    setCode: string;
    subtype: string;
    supertype: string;
    text: string[];
    types: string[];
    weaknesses: Weakness[];
}
