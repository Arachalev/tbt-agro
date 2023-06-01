import { FetchBaseQueryError } from "@reduxjs/toolkit/dist/query";

const isFetchBaseQueryErrorType = (error: any) => {
  if ("data" in error && "message" in error?.data) {
    return error.data.message;
  }
};

export default isFetchBaseQueryErrorType;
