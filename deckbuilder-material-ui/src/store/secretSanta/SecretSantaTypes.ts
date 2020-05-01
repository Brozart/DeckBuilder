import { Person } from 'api/model/person/Person';

export const ADD_PERSON = 'ADD_PERSON';
export const REMOVE_PERSON = 'REMOVE_PERSON';

export interface AddPersonAction {
    type: typeof ADD_PERSON;
    person: Person;
}

export interface RemovePersonAction {
    type: typeof REMOVE_PERSON;
    person: Person;
}

export type SecretSantaAction = AddPersonAction | RemovePersonAction;
