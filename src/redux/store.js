import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import { combinedReducer } from "./reducer";
import { save } from "redux-localstorage-simple";

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const configureStore = (preloadedState) =>
  createStore(
    combinedReducer,
    preloadedState,
    composeEnhancers(
      applyMiddleware(thunkMiddleware, save({ namespace: "note-list" }))
    )
  );

export const store = configureStore([]);
