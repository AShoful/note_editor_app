import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import { combinedReducer } from "./reducer";
import { save } from "redux-localstorage-simple";

const composeEnhancers =
  typeof window === "object" &&
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const configureStore = (preloadedState: any) =>
  createStore(
    combinedReducer,
    preloadedState,
    composeEnhancers(
      applyMiddleware(thunkMiddleware, save({ namespace: "note-list" }))
    )
  );

export const store = configureStore({});
