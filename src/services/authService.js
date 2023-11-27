import { createAsyncThunk } from "@reduxjs/toolkit";
import { type_constants } from "../store/constants/constants.js";
import { apiHandle } from "../config/apiHandle/apiHandle.js";


export const register_user_post_async = createAsyncThunk(
  type_constants.REGISTER_USER,
  async (post_data) => {
    try {
      const response = await apiHandle.post("/register", post_data);
      const res_data = await response.data;

      return res_data;
    } catch (error) {
      console.log("error", { error });
      if (error?.response?.data) {
        throw Error(error.response.data.message);
      } else {
        throw Error(error.message);
      }
    }
  }
);

export const verify_otp_async = createAsyncThunk(
  type_constants.VERIFY_OTP,
  async (post_data) => {
    try {
      const response = await apiHandle.post("/verify-otp", post_data);
      const res_data = await response.data;

      return res_data;
    } catch (error) {
      console.log("error", error);
      if (error?.response?.data) {
        throw Error(error.response.data.message);
      } else {
        throw Error(error.message);
      }
    }
  }
);

export const reset_password_verify_otp_async = createAsyncThunk(
  type_constants.VERIFY_OTP_RESET,
  async (post_data) => {
    try {
      const response = await apiHandle.post(
        "/reset-password-otp-verify",
        post_data
      );
      const res_data = await response.data;

      return res_data;
    } catch (error) {
      console.log("error", error);
      if (error?.response?.data) {
        throw Error(error.response.data.message);
      } else {
        throw Error(error.message);
      }
    }
  }
);



export const login_user_post_async = createAsyncThunk(
  type_constants.LOGIN_USER,
  async (post_data) => {
    try {
      const response = await apiHandle.post("/login", post_data);
      const res_data = await response.data;
      return res_data;
    } catch (error) {
      console.log(error);
      if (error?.response?.data) {
        throw Error(error.response.data.message);
      } else {
        throw Error(error.message);
      }
    }
  }
);

export const check_auth_async = createAsyncThunk(
  type_constants.CHECK_AUTH,
  async () => {
    try {
      const response = await apiHandle.get("/check-auth");
      const res_data = await response.data;
      return res_data;
    } catch (error) {
      console.log(error);
      if (error?.response?.data) {
        throw Error(error.response.data.message);
      } else {
        throw Error(error.message);
      }
    }
  }
);

export const reset_password_request_otp_async = createAsyncThunk(
  type_constants.FORGOT_PASSWORD,
  async (post_data) => {
    try {
      const response = await apiHandle.post(
        "/reset-password-req",
        post_data
      );
      const res_data = await response.data;
      return res_data;
    } catch (error) {
      console.log(error);
      if (error?.response?.data) {
        throw Error(error.response.data.message);
      } else {
        throw Error(error.message);
      }
    }
  }
);

export const reset_password_create_password_async = createAsyncThunk(
  type_constants.RESET_PASSWORD,
  async (post_data) => {
    try {
      const response = await apiHandle.post(
        "/reset-password-create",
        post_data
      );
      const res_data = await response.data;
      return res_data;
    } catch (error) {
      console.log(error);
      if (error?.response?.data) {
        throw Error(error.response.data.message);
      } else {
        throw Error(error.message);
      }
    }
  }
);
