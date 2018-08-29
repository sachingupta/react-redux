import { IAction } from "../actions/IAction";
import { ADD_ARTICLE } from "../../constants/actionTypes";
const initialState: any = {
    articles: []
};

export interface IState {
    articles: IArticle[];
}

export interface IArticle {
    name: string;
    id: number;
}

export const rootReducer = (state: IState = initialState, action: IAction) => {
    switch (action.type) {
        case ADD_ARTICLE:
            return { ...state, articles: [...state.articles, action.payload] };
        default:
            return state;
    }
};