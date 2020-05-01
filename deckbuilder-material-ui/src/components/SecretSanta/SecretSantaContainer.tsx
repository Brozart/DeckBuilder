import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MailAPI from 'api/mail/MailAPI';
import { Person } from 'api/model/person/Person';
import useSecretSanta, { addPerson, selectSecretSantaState } from 'store/secretSanta';
import SecretSanta from './SecretSanta';

const SecretSantaContainer = (): React.FunctionComponentElement<{}> => {
    const persons = useSelector(selectSecretSantaState);
    const dispatch = useDispatch();
    const { pair } = useSecretSanta();

    /** HANDLER FUNCTIONS */
    const handleClick = (): void => {
        const pairings = pair(persons);
        pairings.forEach(pairing => MailAPI.sendMail(pairing).then(() => {}));
        alert('Mails sent');
    };

    const handleAddPerson = (person: Person): void => {
        dispatch(addPerson(person));
    };

    /** RENDER FUNCTIONS */
    return <SecretSanta persons={persons} onAddPerson={handleAddPerson} onGenerate={handleClick} />;
};

export default SecretSantaContainer;
