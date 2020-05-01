import { Radio, FormControlLabel } from '@material-ui/core';
import React from 'react';

interface Props {
    /** The options to show */
    options: string[];
    /** The default option */
    value: string;
    /** The option selected handler */
    onOptionSelected(option: string): void;
}

const RadioFilterOptions = ({ options, value, onOptionSelected }: Props): React.FunctionComponentElement<Props> => {
    console.info(value);
    /** HANDLER FUNCTIONS */
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        onOptionSelected(event.target.value);
    };

    /** RENDER FUNCTIONS */
    return (
        <>
            {options.map(option => (
                <FormControlLabel
                    key={option}
                    value={option}
                    control={
                        <Radio checked={value === option} color={'primary'} value={option} onChange={handleChange} />
                    }
                    label={option}
                />
            ))}
        </>
    );
};

export default RadioFilterOptions;
