import * as React from "react";
import { connect } from "react-redux";

import { IState, IArticle } from "../redux/store";

import * as Styles from "./App.css";
import * as scssStyles from "./App.scss";

export interface IArticlesProps { articles: IArticle[]; }

const mapStateToProps = (state: IState) => {
    return { articles: state.articles };
  };


class ArticlesComponent extends React.Component<IArticlesProps, {}>
{
    render() {
        return <ul>{this.props.articles.map(el => <li key={el.id}>{el.title}</li>)}</ul>;
    }
}

export const Articles = connect(mapStateToProps)(ArticlesComponent);
