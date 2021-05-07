import { getCats as fetchCats } from "../../helpers/apiCall/fetchData";

const RELOAD = "thecat-app/cats/RELOAD";
const LOAD_MORE = "thecat-app/cats/LOAD_MORE";
const SET_LOADING_STATUS = "thecat-app/cats/SET_LOADING_STATUS";

const initialState = {
  list: [],
  loading: false,
  page: 0,
  id: "",
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOAD_MORE:
      return {
        ...state,
        loading: false,
        list: [...state.list, ...action.payload.cats],
        page: state.page + 1,
      };
    case RELOAD:
      return {
        loading: false,
        page: 0,
        list: action.payload.cats,
        id: action.payload.id,
      };
    case SET_LOADING_STATUS:
      return { ...state, loading: action.payload.loading };
    default:
      return state;
  }
}

// Actions
export const loadCats = (params, onFail) => {
  return async (dispatch) => {
    dispatch(setLoadingStatus(true));
    try {
      const cats = await fetchCats(params);
      const action = params.page
        ? loadMore(cats)
        : reload({ cats, id: params.category_ids });
      dispatch(action);
    } catch (error) {
      dispatch(setLoadingStatus(false));
      onFail && onFail(error);
    }
  };
};

export const loadMore = (cats) => ({
  type: LOAD_MORE,
  payload: { cats },
});

export const reload = ({ cats, id }) => ({
  type: RELOAD,
  payload: { cats, id },
});

export const setLoadingStatus = (status) => ({
  type: SET_LOADING_STATUS,
  payload: { loading: status },
});

// Selectors
export const getCats = (store) => store.cats;
export const getCatsLoadingStaus = (store) => store.cats.loading;
