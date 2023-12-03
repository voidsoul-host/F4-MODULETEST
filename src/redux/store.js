import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import funcreducer from "./reducer/funcreducer";

const store = createStore(funcreducer, applyMiddleware(thunk));

export default store;