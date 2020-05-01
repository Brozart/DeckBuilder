import { Typography, Avatar, Grid } from '@material-ui/core';
import React, { useState, ReactNode } from 'react';
import { Card, CardSetLegalType } from 'api/model';
import PokemonAPI from 'api/pokemon';
import QuickSearch from 'common/quickSearch/QuickSearch';
import RadioFilterOptions from 'common/radioFilterOptions';
import useCardSets from 'store/cardSet';

const DeckBuilderContainer = (): React.FunctionComponentElement<{}> => {
    const [cards, setCards] = useState<Card[]>([]);
    const [legality, setLegality] = useState<CardSetLegalType>(CardSetLegalType.STANDARD);
    const cardSets = useCardSets(legality);

    const handleSearch = (searchText: string): void => {
        if (searchText && searchText.length > 3) {
            PokemonAPI.searchPokemon(searchText, cardSets).then(resp => setCards(resp));
        }
    };

    const handleItemSelected = (card: Card): void => {
        alert(card.name);
    };

    const cardToText = (card: Card): string => {
        return card.name;
    };

    return (
        <>
            <QuickSearch<Card>
                searchResults={cards}
                handleSearch={handleSearch}
                handleItemSelected={handleItemSelected}
                itemToText={cardToText}
                renderItem={(card: Card): ReactNode => (
                    <Grid container spacing={2}>
                        <Grid item xs={2}>
                            <Avatar alt={card.imageUrl} src={card.imageUrl} />
                        </Grid>
                        <Grid item xs={10}>
                            <Typography>{card.name + ' (' + card.set + ')'}</Typography>
                        </Grid>
                    </Grid>
                )}
            />
            <RadioFilterOptions
                value={legality}
                options={[CardSetLegalType.STANDARD, CardSetLegalType.EXPANDED, CardSetLegalType.UNLIMITED]}
                onOptionSelected={(value: CardSetLegalType): void => setLegality(value)}
            />
        </>
    );
};

export default DeckBuilderContainer;
