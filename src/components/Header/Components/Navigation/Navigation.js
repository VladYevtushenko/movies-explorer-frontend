import { React } from 'react';
import { NavigationAuth } from './Components/NavigationAuth/NavigationAuth';
import { NavigationLoggedIn } from './Components/NavigationLoggedIn/NavigationLoggedIn';

export const Navigation = ({ loggedIn }) => {
    return <>{loggedIn ? <NavigationAuth /> : <NavigationLoggedIn />}</>;
};