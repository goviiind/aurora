import { ip } from "../../config";
import { ADD_EMP, GET_EMP, EMP_ERROR } from "./types";
import axios from "axios";

export const getEmployee = () => async (dispatch) => {
  try {
    const res = await axios.get(`${ip}/employee`);

    dispatch({
      type: GET_EMP,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: EMP_ERROR,
      payload: err.response,
    });
  }
};

export const addEmployee = (formData) => async (dispatch) => {
  try {
    const res = await axios.post(`${ip}/employee`, formData);

    if (res.data.error) {
      window.alert(res.data.error);
    }

    dispatch({
      type: ADD_EMP,
      payload: res.data,
    });

    if (!res.data.error) {
      window.alert("Employee added successfully");
    }
  } catch (err) {
    dispatch({
      type: EMP_ERROR,
      payload: err.response,
    });
  }
};
