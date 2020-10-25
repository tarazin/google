import React, { createContext, useReducer, useContext } from "react";
import {
    SET_SEARCH_RESULTS,
    SET_SAVED_RESULTS
} from "./actions";

const StoreContext = createContext();
const { Provider } = StoreContext;

const reducer = (state, action) => {
  switch (action.type) {
    case SET_SEARCH_RESULTS:
      return {
        ...state,
        results: action.searchResults,
      };
    case SET_SAVED_RESULTS:
      return {
        ...state,
        saved: action.savedResults,
      };
    default:
      return state;
  }
};


const StoreProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useReducer(reducer, {
    results: [],
    currentBook: {},
    saved: []
  });
  return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
  return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };
