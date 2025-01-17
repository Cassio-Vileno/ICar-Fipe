export type Credentials = {
  user: string;
  password: string;
};

export type AuthErrorResponse = {
  error: boolean;
  message: string;
};

export type AuthSuccessResponse = {
  error: boolean;
  user: {
    id: number;
    name: string;
    token: string;
  };
};