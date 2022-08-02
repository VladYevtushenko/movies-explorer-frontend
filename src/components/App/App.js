import React from 'react';
import { Route, Switch } from "react-router-dom";
import './App.css';

function App() {
    return (
        <div className='page'>
            {/* <Header /> */}
            <Switch>
                <Route exact path='/' />
                <Route path='/movies' />
                <Route path='/saved-movies' />
                <Route path='/profile' />
                <Route path='/signin' />
                <Route path='/signup'/>
            </Switch>
        </div>
    );
}

export default App;