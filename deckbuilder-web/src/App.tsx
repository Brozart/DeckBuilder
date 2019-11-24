import { CssBaseline } from '@material-ui/core';
import React, { FunctionComponentElement, useState } from 'react';
import ContentContainer from './shell/content/ContentContainer';
import Header from './shell/header/Header';
import Navigation from './shell/navigation/Navigation';
import useStyles from './shell/styles/Styles';

const App = (): FunctionComponentElement<{}> => {
    const classes = useStyles();
    const [drawerOpen, setDrawerOpen] = useState(false);

    /** HANDLER FUNCTIONS */
    const handleDrawerOpen = (): void => {
        setDrawerOpen(true);
    };

    const handleDrawerClose = (): void => {
        setDrawerOpen(false);
    };

    /** RENDER FUNCTIONS */
    return (
        <div className={classes.root}>
            <CssBaseline />
            <Header open={drawerOpen} handleDrawerOpen={handleDrawerOpen} />
            <Navigation open={drawerOpen} handleDrawerClose={handleDrawerClose} />
            <ContentContainer />
        </div>
    );
};

export default App;
