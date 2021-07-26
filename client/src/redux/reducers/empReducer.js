import { ADD_EMP, GET_EMP, EMP_ERROR } from "../actions/types";

const initial_state = {
  empList: [],
  loading: true,
  employee: null,
  errors: null,
};

export default (state = initial_state, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_EMP:
      return {
        ...state,
        empList: payload,
        loading: false,
      };
    case ADD_EMP:
      return {
        ...state,
        employee: payload,
        loading: false,
      };
    case EMP_ERROR:
      return {
        ...state,
        empList: null,
        loading: false,
        errors: payload,
      };

    default:
      return state;
  }
};
