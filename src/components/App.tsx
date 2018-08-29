import * as React from "react";

import * as Styles from "./App.css"; 
import * as scssStyles from "./App.scss"; 
import { Welcome } from "./Welcome";


export class App extends React.Component<{}, {}>
{
    render() {
        return <Welcome />;
    }
}