import { createAction } from "../../utils/reducer/reducer.utils";
import { CATEGORIES_ACTION_TYPE } from "./category.types";

const {
    FETCH_CATEGORIES_START,
    FETCH_CATEGORIES_FAILED,
    FETCH_CATEGORIES_SUCCESS,
} = CATEGORIES_ACTION_TYPE;

export const fetchCategoriesStart = () => createAction(
    FETCH_CATEGORIES_START
);

export const fetchCategoriesSuccess = (categories) => createAction(
    FETCH_CATEGORIES_SUCCESS,
    categories
);

export const fetchCategoriesFailed = (error) => createAction(
    FETCH_CATEGORIES_FAILED,
    error
);