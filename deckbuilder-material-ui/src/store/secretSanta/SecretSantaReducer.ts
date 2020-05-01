import { Person } from 'api/model/person/Person';
import { SecretSantaAction, ADD_PERSON, REMOVE_PERSON } from './SecretSantaTypes';

export type SecretSantaState = Person[];

const initialState: SecretSantaState = [];

export const secretSantaReducer = (state = initialState, action: SecretSantaAction): SecretSantaState => {
    switch (action.type) {
        case ADD_PERSON:
            return state.concat(action.person);
        case REMOVE_PERSON:
            return state.filter(p => p.email === action.person.email);
        default:
            return state;
    }
};
