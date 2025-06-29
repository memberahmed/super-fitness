declare type SucceessfullRespone<T> = {
  message: "success";
} & T;

declare type ErrorResponse = {
  error: string;
};

declare type ApiResponse<T> = ErrorResponse | SucceessfullRespone<T>;
