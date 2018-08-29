import { createStore } from "redux";
import { rootReducer } from "./reducers/rootReducer";

export interface IArticle {
    title: string;
    id: any;
}

export interface IState {
    articles: IArticle[];
}

export const store = createStore(rootReducer);