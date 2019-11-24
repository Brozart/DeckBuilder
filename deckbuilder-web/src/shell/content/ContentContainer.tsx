import { Typography } from '@material-ui/core';
import React from 'react';
import useStyles from 'shell/styles/Styles';

const ContentContainer = (): React.FunctionComponentElement<{}> => {
    const classes = useStyles();

    return (
        <main className={classes.content}>
            <div className={classes.toolbar} />
            <Typography>Content</Typography>
        </main>
    );
};

export default ContentContainer;
