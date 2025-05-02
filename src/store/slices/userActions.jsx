// src/store/slices/userActions.js
import { updateUserData, deleteUserData } from "../../userService";
import { updateUserStart, updateUserSuccess, updateUserFailure, deleteUserSuccess, deleteUserFailure } from "./userSlice";

export const updateUser = (userId, updatedData) => {
  return async (dispatch) => {
    dispatch(updateUserStart());
    try {
      await updateUserData(userId, updatedData);
      dispatch(updateUserSuccess());
    } catch (error) {
      dispatch(updateUserFailure(error.message));
    }
  };
};

export const deleteUser = (userId) => {
  return async (dispatch) => {
    try {
      await deleteUserData(userId);
      dispatch(deleteUserSuccess());
    } catch (error) {
      dispatch(deleteUserFailure(error.message));
    }
  };
};
