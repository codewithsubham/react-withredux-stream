import streams from "../apis/streams"

import history from "../history";
import { SIGN_IN, SIGN_OUT, CREATE_STREAM, FETCH_STREAM, FETCH_STREAMS, EDIT_STREAM, DELETE_STREAM } from "./type"

export const signIn = (userId) =>
{
    return {
        type: SIGN_IN,
        payload: userId
    }
}

export const signOut = () =>
{
    return {
        type: SIGN_OUT
    }
}

export const createStream = formValue => async (dispatch, getState) =>
{

    let response = await streams.post("/stream", { ...formValue, userId: getState().auth.userId });

    dispatch({
        type: CREATE_STREAM,
        payload: response.data
    })

    history.push("/")
}

export const fetchStreams = () => async dispatch =>
{
    let response = await streams.get("/stream");
    dispatch({
        type: FETCH_STREAMS,
        payload: response.data
    })

}

export const fetchStream = id => async dispatch =>
{
    let response = await streams.get(`/stream/${id}`);
    dispatch({
        type: FETCH_STREAM,
        payload: response.data
    })
}

export const editStream = (id, formValue) => async dispatch =>
{
    let response = await streams.patch(`/stream/${id}`, formValue);
    dispatch({
        type: EDIT_STREAM,
        payload: response.data
    })
    history.push("/")
}

export const deleteStream = (id) => async dispatch =>
{
    await streams.delete(`/stream/${id}`);
    dispatch({
        type: DELETE_STREAM,
        payload: id
    })
    history.push("/")
}