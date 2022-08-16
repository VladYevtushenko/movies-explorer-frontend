import { React, useState } from 'react';
import { NavigationAuth } from './Components/NavigationAuth/NavigationAuth';
import { NavigationLoggedIn } from './Components/NavigationLoggedIn/NavigationLoggedIn';

export const Navigation = () => {
    // eslint-disable-next-line no-unused-vars
    const [loggedIn, setLoggedIn] = useState(false);

    return <>{loggedIn ? <NavigationAuth /> : <NavigationLoggedIn />}</>;
};