import { IAction } from "./IAction";
import { ADD_ARTICLE } from "../../constants/actionTypes";
import { IArticle } from "../store";

export const addArticle = (article: IArticle) => ({ type: ADD_ARTICLE, payload: article });