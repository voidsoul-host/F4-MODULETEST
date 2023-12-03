import { SEARCHWORD, POST_REQUEST_START, POST_SUCCESS_DATA, POST_FAILURE_DATA } from "./actiontype";
import axios from "axios";

export const searchWord = (word) => {
    return {
        type: SEARCHWORD,
        payload: word,
    };
};

export const postRequestStart = () => {
    return {
        type: POST_REQUEST_START
    }
}

export const postSuccessData = (data) => {
    return {
        type: POST_SUCCESS_DATA,
        payload: data
    }
}

export const postFailureData = (error) => {
    return {
        type: POST_FAILURE_DATA,
        payload: error
    }
}

export const postRequest = (input) => {
    return (dispatch) => {
        dispatch(postRequestStart());
        axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${input}`)
            .then(response => {
                console.log(response.data)

                dispatch(postSuccessData(response.data))
            })
            .catch(err => {
                console.log(err.response.data.message)
                dispatch(postFailureData(err.response.data.message))
            })
    }
}