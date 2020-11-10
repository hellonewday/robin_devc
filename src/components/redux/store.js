import { createStore, applyMiddleware, compose } from "redux";
// import  from "redux-saga";
import createSagaNiddleware from "redux-saga";
import rootSagas from "./sagas/index";
import rootReducer from "./reducers/index";
const middleware = createSagaNiddleware();

export default createStore(
  rootReducer,
  compose(
    applyMiddleware(middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

middleware.run(rootSagas);
