import { CREATE_STREAM, FETCH_STREAM, FETCH_STREAMS, EDIT_STREAM, DELETE_STREAM } from "../action/type"


const streamReducer = (state = {}, action) =>
{
    switch (action.type)
    {
        case FETCH_STREAMS:
            return {
                ...state, ...action.payload.reduce((acc, value) =>
                {
                    acc[value.id] = value;
                    return acc;
                }, {})
            }
        case FETCH_STREAM:
            return { ...state, [action.payload.id]: action.payload };
        case CREATE_STREAM:
            return { ...state, [action.payload.id]: action.payload };
        case EDIT_STREAM:
            return { ...state, [action.payload.id]: action.payload };
        case DELETE_STREAM:
            let newState = { ...state };
            delete newState[action.payload];
            return newState;
        // return Object.fromEntries(Object.entries(state).filter(([key]) => key !== action.payload));
        default:
            return state
    }
}


export default streamReducer;