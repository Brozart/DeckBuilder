import React from 'react';
import useStyles from 'shell/styles/Styles';
import { Route, Switch } from 'react-router-dom';
import DeckBuilderContainer from 'components/deckbuilder/DeckBuilderContainer';
import SecretSantaContainer from 'components/SecretSanta/SecretSantaContainer';

const ContentContainer = (): React.FunctionComponentElement<{}> => {
    const classes = useStyles();

    return (
        <main className={classes.content}>
            <div className={classes.toolbar} />
            <Switch>
                <Route path={'/deckBuilder'} component={DeckBuilderContainer} />
                <Route path={'/secretSanta'} component={SecretSantaContainer} />
            </Switch>
        </main>
    );
};

export default ContentContainer;
