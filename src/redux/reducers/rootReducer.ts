import { IAction } from "../actions/IAction";
import { ADD_ARTICLE } from "../../constants/actionTypes";
import { IState } from "../store";
const initialState: any = {
    articles: []
};

export const rootReducer = (state: IState = initialState, action: IAction) => {
    switch (action.type) {
        case ADD_ARTICLE:
            return { ...state, articles: [...state.articles, action.payload] };
        default:
            return state;
    }
};