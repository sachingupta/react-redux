import * as React from "react";

import * as Styles from "./App.css";
import * as scssStyles from "./App.scss";

export interface IWelcomeState { articles: any[]; }


export class Welcome extends React.Component<{}, IWelcomeState>
{
    constructor(props: {}) {
        super(props);
        this.state = {
            articles: [
                { title: "React Redux Tutorial for Beginners", id: 1 },
                { title: "Redux e React: cos'è Redux e come usarlo con React", id: 2 }
            ]
        };
    }
    render() {
        const { articles } = this.state;
        return <ul>{articles.map(el => <li key={el.id}>{el.title}</li>)}</ul>;
    }
}