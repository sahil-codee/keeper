import React from 'react';
import {Switch, Route} from "react-router-dom"
import CreateArea from './Components/CreateArea';

export default function Routes() {
    return (
        <div>
            <Switch>
            <Route exact path="/keeper" component={CreateArea} ></Route>
            </Switch>
        </div>
    )
}

