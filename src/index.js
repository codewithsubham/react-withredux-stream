import ReactDom from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import reduxThunk from "redux-thunk";

import reducers from "./reducers";

import App from "./components/App";


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(reducers, composeEnhancer(applyMiddleware(reduxThunk)));

ReactDom.render(<Provider store={store}><App /></Provider>, document.querySelector("#root"));