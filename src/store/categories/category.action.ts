import { createAction, Action, ActionWithPayload, withMatcher } from "../../utils/reducer/reducer.utils";
import { CATEGORIES_ACTION_TYPE, Category } from "./category.types";

export type FetchCategoriesStart = Action<CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_START>
export type FetchCategoriesSuccess = ActionWithPayload<CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_SUCCESS, Category[]>
export type FetchCategoriesError = ActionWithPayload<CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_FAILED, Error>

export const fetchCategoriesStart = withMatcher((): FetchCategoriesStart => createAction(
    CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_START
));

export const fetchCategoriesSuccess = withMatcher((categories: Category[]): FetchCategoriesSuccess => createAction(
    CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_SUCCESS,
    categories
));

export const fetchCategoriesFailed = withMatcher((error: Error): FetchCategoriesError => createAction(
    CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_FAILED,
    error
));