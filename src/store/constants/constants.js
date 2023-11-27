export const type_constants = {
  AUTH: "AUTH",
  REGISTER_USER: "REGISTER_USER",
  LOGIN_USER: "LOGIN_USER",
  CHECK_AUTH: "CHECK_AUTH",
  VERIFY_OTP: "VERIFY_OTP",
  VERIFY_OTP_RESET: "VERIFY_OTP_RESET",
  RESEND_OTP: "RESEND_OTP",
  FORGOT_PASSWORD: "FORGOT_PASSWORD",
  RESET_PASSWORD: "RESET_PASSWORD",
  GET_ALL_TOPICS: "GET_ALL_TOPICS",
  CREATE_COMMUNITY: "CREATE_COMMUNITY",
  SEARCH_COMMUNITY: "SEARCH_COMMUNITY",
  JOIN_COMMUNITY: "JOIN_COMMUNITY",
  SEARCH_POST: "SEARCH_POST",
  VOTE_POST: "VOTE_POST",
};

export const save_tokens_constant = "@usertokens";
export const session_expired = "@session_expired";

export const constants = () => {
  return {
    light_theme: "light",
    dark_theme: "dark",
  };
};
