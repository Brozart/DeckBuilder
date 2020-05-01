import { Person } from 'api/model/person/Person';
import { AddPersonAction, ADD_PERSON, RemovePersonAction, REMOVE_PERSON } from './SecretSantaTypes';

export function addPerson(person: Person): AddPersonAction {
    return {
        type: ADD_PERSON,
        person: person
    };
}

export function removePerson(person: Person): RemovePersonAction {
    return {
        type: REMOVE_PERSON,
        person: person
    };
}
