import axios from "axios";
import {
  ADD_TODOS_SUCCESS,
  DELETE_TODOS_SUCCESS,
  GET_TODOS_SUCCESS,
  TODOS_ERROR,
  TODOS_LOADING,
  UPDATE_TODOS_SUCCESS,
} from "./todos.types";

export const getTodosAPI = () => async (dispatch) => {
  dispatch({ type: TODOS_LOADING });
  try {
    let res = await axios.get("http://localhost:8080/get");
    dispatch({ type: GET_TODOS_SUCCESS, payload: res.data });
  } catch (err) {
    dispatch({ type: TODOS_ERROR });
  }
};

export const updateTodosAPI = (id, data) => async (dispatch) => {
  dispatch({ type: TODOS_LOADING });
  try {
    await axios.patch(`http://localhost:8080/patch/${id}`, data);
    dispatch({ type: UPDATE_TODOS_SUCCESS });
  } catch (err) {
    dispatch({ type: TODOS_ERROR });
  }
};

export const postTodosAPI = (newTask) => async (dispatch) => {
  dispatch({ type: TODOS_LOADING });
  try {
    await axios.post("http://localhost:8080/post", newTask);
    dispatch({ type: ADD_TODOS_SUCCESS });
  } catch (err) {
    dispatch({ type: TODOS_ERROR });
  }
};

export const deleteTodosAPI = (id) => async (dispatch) => {
  dispatch({ type: TODOS_LOADING });
  try {
    await axios.delete(`http://localhost:8080/delete/${id}`);
    dispatch({ type: DELETE_TODOS_SUCCESS });
  } catch (err) {
    dispatch({ type: TODOS_ERROR });
  }
};
