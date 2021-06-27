export type OperationResponse = {
  success: boolean;
  payload: any;
  msg: string;
};

export type ApiResponse = {
  code: number;
  type: string;
  message: string;
  payload: any;
};
