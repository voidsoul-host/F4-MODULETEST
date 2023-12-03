import { SEARCHWORD,POST_REQUEST_START, POST_SUCCESS_DATA, POST_FAILURE_DATA } from "../action/actiontype";

const initialState = {
    history: [],
    loading: false,
    data: [],
    error: false,
};

const funcreducer = (state = initialState, action) => {
    switch (action.type) {
        case SEARCHWORD:
            return {
                ...state, history: [...state.history, action.payload],
            };
        case POST_REQUEST_START:
            return { ...state, loading: true };

        case POST_SUCCESS_DATA:
            return { ...state, data: action.payload, loading: false, error: false };

        case POST_FAILURE_DATA:
            return { ...state, data: [], loading: false, error: action.payload };

        default: return state;
    };
};

export default funcreducer;