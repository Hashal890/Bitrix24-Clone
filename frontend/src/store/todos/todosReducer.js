import {
  ADD_TODOS_SUCCESS,
  DELETE_TODOS_SUCCESS,
  GET_TODOS_SUCCESS,
  TODOS_ERROR,
  TODOS_LOADING,
  UPDATE_TODOS_SUCCESS,
} from "./todos.types";

const initState = {
  loading: false,
  error: false,
  data: [],
  totalData: 0,
  totalPages: 0,
};

export const todosReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case TODOS_LOADING: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case TODOS_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    case GET_TODOS_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
        data: payload.docs,
        totalData: payload.totalDocs,
        totalPages: payload.totalPages,
      };
    }
    case UPDATE_TODOS_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
      };
    }
    case DELETE_TODOS_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
      };
    }
    case ADD_TODOS_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
      };
    }
    default: {
      return state;
    }
  }
};
