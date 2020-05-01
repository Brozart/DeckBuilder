import { TextField, Button, TextareaAutosize, Grid, Card, CardContent, Box } from '@material-ui/core';
import React, { useState } from 'react';
import { Person } from '../../api/model/person/Person';
import useStyles from '../../shell/styles/Styles';

interface Props {
    onPersonAdd: (person: Person) => void;
}

const AddPerson = ({ onPersonAdd }: Props): React.FunctionComponentElement<Props> => {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [info, setInfo] = useState<string>('');

    const classes = useStyles();

    const handleNameChange = (ev: React.ChangeEvent<HTMLInputElement>): void => {
        setName(ev.target.value);
    };

    const handleEmailChange = (ev: React.ChangeEvent<HTMLInputElement>): void => {
        setEmail(ev.target.value);
    };

    const handleInfoChange = (ev: React.ChangeEvent<HTMLTextAreaElement>): void => {
        setInfo(ev.target.value);
    };

    const handleAddPerson = (): void => {
        const person: Person = {
            name: name,
            email: email,
            extraInfo: info
        };
        onPersonAdd(person);

        setName('');
        setEmail('');
        setInfo('');
    };

    return (
        <Card>
            <CardContent>
                <Box>
                    <TextField
                        id={'outlined-basic'}
                        className={classes.textfield}
                        label={'Name'}
                        value={name}
                        onChange={handleNameChange}
                    />
                    <TextField
                        id={'outlined-basic'}
                        className={classes.textfield}
                        label={'Email'}
                        value={email}
                        onChange={handleEmailChange}
                    />
                </Box>
                <Box>
                    <TextareaAutosize
                        aria-label={'empty textarea'}
                        placeholder={'Extra info'}
                        value={info}
                        onChange={handleInfoChange}
                        className={classes.textfield}
                    />
                </Box>
                <Box justifyContent={'flex-end'}>
                    <Button onClick={handleAddPerson} variant={'contained'}>
                        Add
                    </Button>
                </Box>
            </CardContent>
        </Card>
    );
};

export default AddPerson;
