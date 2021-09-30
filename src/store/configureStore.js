import { createStore, applyMiddleware } from "redux";
import rootSaga from "./sagas";
import { setData } from "./dataReducer";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  setData,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);