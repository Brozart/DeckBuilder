import React from 'react';
import clsx from 'clsx';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar/AppBar';
import useStyles from 'shell/styles/Styles';

interface Props {
    /** The open drawer boolean */
    open: boolean;
    /** The drawer open function */
    handleDrawerOpen(): void;
}

const Header = (props: Props): React.FunctionComponentElement<Props> => {
    const classes = useStyles();
    const { open, handleDrawerOpen } = props;

    return (
        <AppBar
            position="fixed"
            className={clsx(classes.appBar, {
                [classes.appBarShift]: open
            })}
        >
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerOpen}
                    edge="start"
                    className={clsx(classes.menuButton, {
                        [classes.hide]: open
                    })}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" noWrap>
                    DeckBuilder
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
