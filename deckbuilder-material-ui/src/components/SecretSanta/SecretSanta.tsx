import { Grid, List, ListItem, ListItemText, Button, Box } from '@material-ui/core';
import React from 'react';
import { Person } from '../../api/model/person/Person';
import AddPerson from './AddPerson';

interface Props {
    persons: Person[];
    onAddPerson(person: Person): void;
    onGenerate(): void;
}

const SecretSanta = ({ persons, onAddPerson, onGenerate }: Props): React.FunctionComponentElement<Props> => {
    return (
        <Box>
            <AddPerson onPersonAdd={onAddPerson} />
            <List>
                {persons.map(p => (
                    <ListItem key={p.name}>
                        <ListItemText primary={p.name} secondary={p.email} />
                    </ListItem>
                ))}
            </List>
            <Button onClick={onGenerate} variant="contained">
                Generate pairings and send mail
            </Button>
        </Box>
    );
};

export default SecretSanta;
