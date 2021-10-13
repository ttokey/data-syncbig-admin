import './App.css';
import * as React from "react";
import {Component} from "react";
import './scss/style.scss'
import DefaultLayout from "./layout/DefaultLayout";
import {HashRouter, Route, Switch} from "react-router-dom";

const loading = (
    <div className="pt-3 text-center">
        <div className="sk-spinner sk-spinner-pulse"></div>
    </div>
)

class App extends Component {
    render() {
        return (
            <HashRouter>
                <React.Suspense fallback={loading}>
                    <Switch>
                        <Route path="/" name="Home" render={(props) => <DefaultLayout {...props} />}/>
                    </Switch>
                </React.Suspense>
            </HashRouter>
        );
    }
}


export default App;
