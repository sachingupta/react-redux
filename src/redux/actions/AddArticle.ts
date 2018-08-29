import { IAction } from "./IAction";
import { ADD_ARTICLE } from "../../constants/actionTypes";

export const addArticle = (article: IAction) => ({ type: ADD_ARTICLE, payload: article });