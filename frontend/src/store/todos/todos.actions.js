import axios from "axios";
import {
  ADD_TODOS_SUCCESS,
  DELETE_TODOS_SUCCESS,
  GET_TODOS_SUCCESS,
  TODOS_ERROR,
  TODOS_LOADING,
  UPDATE_TODOS_SUCCESS,
} from "./todos.types";

export const getTodosAPI = (page, limit) => async (dispatch) => {
  dispatch({ type: TODOS_LOADING });
  try {
    let getRequestRes = await axios.get(
      `https://betrix24-backend.herokuapp.com/get?page=${page}&limit=${limit}`
    );
    dispatch({ type: GET_TODOS_SUCCESS, payload: getRequestRes.data.response });
  } catch (err) {
    dispatch({ type: TODOS_ERROR });
  }
};

export const updateTodosAPI = (id, data) => async (dispatch) => {
  dispatch({ type: TODOS_LOADING });
  try {
    await axios.patch(
      `https://betrix24-backend.herokuapp.com/patch/${id}`,
      data
    );
    dispatch({ type: UPDATE_TODOS_SUCCESS });
  } catch (err) {
    dispatch({ type: TODOS_ERROR });
  }
};

export const postTodosAPI = (newTask) => async (dispatch) => {
  dispatch({ type: TODOS_LOADING });
  try {
    await axios.post("https://betrix24-backend.herokuapp.com/post", newTask);
    dispatch({ type: ADD_TODOS_SUCCESS });
  } catch (err) {
    dispatch({ type: TODOS_ERROR });
  }
};

export const deleteTodosAPI = (id) => async (dispatch) => {
  dispatch({ type: TODOS_LOADING });
  try {
    await axios.delete(`https://betrix24-backend.herokuapp.com/delete/${id}`);
    dispatch({ type: DELETE_TODOS_SUCCESS });
  } catch (err) {
    dispatch({ type: TODOS_ERROR });
  }
};
