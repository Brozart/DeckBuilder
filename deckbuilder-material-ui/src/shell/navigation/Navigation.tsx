import React from 'react';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import useStyles from 'shell/styles/Styles';
import { useTheme, SvgIcon } from '@material-ui/core';
import NavigationItem from './NavigationItem';

interface Props {
    /** The open drawer boolean */
    open: boolean;
    /** The drawer open function */
    handleDrawerClose(): void;
}

const Navigation = (props: Props): React.FunctionComponentElement<Props> => {
    const classes = useStyles();
    const theme = useTheme();
    const { open, handleDrawerClose } = props;

    return (
        <Drawer
            variant="permanent"
            className={clsx(classes.drawer, {
                [classes.drawerOpen]: open,
                [classes.drawerClose]: !open
            })}
            classes={{
                paper: clsx({
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open
                })
            }}
            open={open}
        >
            <div className={classes.toolbar}>
                <IconButton onClick={handleDrawerClose}>
                    {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                </IconButton>
            </div>
            <Divider />
            <List>
                <NavigationItem to={'/deckBuilder'} text={'Deck builder'}>
                    <SvgIcon color="action">
                        <path
                            d={
                                'M21.47,4.35L20.13,3.79V12.82L22.56,6.96C22.97,5.94 22.5,4.77 21.47,4.35M1.97,8.05L6.93,20C7.24,20.77 7.97,21.24 8.74,21.26C9,21.26 9.27,21.21 9.53,21.1L16.9,18.05C17.65,17.74 18.11,17 18.13,16.26C18.14,16 18.09,15.71 18,15.45L13,3.5C12.71,2.73 11.97,2.26 11.19,2.25C10.93,2.25 10.67,2.31 10.42,2.4L3.06,5.45C2.04,5.87 1.55,7.04 1.97,8.05M18.12,4.25A2,2 0 0,0 16.12,2.25H14.67L18.12,10.59'
                            }
                        />
                    </SvgIcon>
                </NavigationItem>
                <NavigationItem to={'/secretSanta'} text={'Secret santa'}>
                    <SvgIcon color="action">
                        <path
                            d={
                                'M24.061,23.959c0,1.038-0.902,1.887-2.005,1.887H2.005C0.902,25.846,0,24.997,0,23.959v-3.774' +
                                'c0-1.038,0.902-1.887,2.005-1.887h20.051c1.103,0,2.005,0.849,2.005,1.887V23.959z'
                            }
                        />
                    </SvgIcon>
                </NavigationItem>
            </List>
        </Drawer>
    );
};

export default Navigation;
