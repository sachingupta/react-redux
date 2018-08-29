import * as React from "react";

import * as Styles from "./App.css";
import * as scssStyles from "./App.scss";
import { Articles } from "./Articles";
import Form from "./Form";


export class App extends React.Component<{}, {}>
{
    render() {
        return (<div className={scssStyles.container}>
            <div className={scssStyles.boxContainer}>
                <h1> Articles </h1>
                <Articles />
            </div>
            <div className={scssStyles.boxContainer}>
                <h1> Add a new Article </h1>
                <Form /></div>
        </div>);
    }
}