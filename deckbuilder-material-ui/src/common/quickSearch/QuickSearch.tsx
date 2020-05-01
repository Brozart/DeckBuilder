import { TextField } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import { RenderInputParams } from '@material-ui/lab/Autocomplete';
import React, { ReactNode } from 'react';

interface Props<T> {
    /** The search results */
    searchResults: T[];
    /** The search handler */
    handleSearch(searchText: string): void;
    /** The selected item handled */
    handleItemSelected(selected: T): void;
    /** Item to text function */
    itemToText(item: T): string;
    /** Render item */
    renderItem(item: T): ReactNode;
}

const QuickSearch = <T extends object>({
    handleSearch,
    handleItemSelected,
    itemToText,
    searchResults,
    renderItem
}: Props<T>): React.FunctionComponentElement<Props<T>> => {
    /** HANDLER FUNCTIONS */
    const handleOnInputChange = (event: React.ChangeEvent<{}>, value: string): void => {
        handleSearch(value);
    };

    const handleOnChange = (event: React.ChangeEvent<{}>, value: T): void => {
        handleItemSelected(value);
    };

    /** RENDER FUNCTIONS */
    return (
        <Autocomplete
            freeSolo
            disableClearable
            options={searchResults}
            getOptionLabel={itemToText}
            onChange={handleOnChange}
            onInputChange={handleOnInputChange}
            renderOption={renderItem}
            renderInput={(params: RenderInputParams): React.ReactNode => (
                <TextField
                    {...params}
                    label="Search input"
                    margin="normal"
                    variant="outlined"
                    fullWidth
                    InputProps={{ ...params.InputProps, type: 'search' }}
                />
            )}
        />
    );
};

export default QuickSearch;
