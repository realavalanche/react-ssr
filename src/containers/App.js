import React from 'react'
import HomePage from '../components/HomePage'
import { Switch, Route } from 'react-router'

class App extends React.Component {

    render() {
        return (
            <Switch>
                <Route path="/" render={(props) => <HomePage {...props} />} />
            </Switch>
        )
    }
}

export default App