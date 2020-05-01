import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { useHistory, useRouteMatch } from 'react-router-dom';
import React from 'react';

interface Props {
    to: string;
    match?: string;
    exact?: boolean;
    text: string;
    children: React.ReactElement;
}

const NavigationItem = ({ to, match, exact, text, children }: Props): React.FunctionComponentElement<Props> => {
    const history = useHistory();
    const routeMatch = useRouteMatch({ path: match ? match : to, exact });

    /** HANDLER FUNCTIONS */
    const handleOnClick = (): void => {
        history.push(to);
    };

    /** RENDER FUNCTIONS */
    return (
        <ListItem button key={text} selected={!!routeMatch} href={to} onClick={handleOnClick}>
            <ListItemIcon>{children}</ListItemIcon>
            <ListItemText primary={text} />
        </ListItem>
    );
};

export default NavigationItem;
