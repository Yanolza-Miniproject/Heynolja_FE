export type Inputs = {
  email: string;
  password: string;
  nickname: string;
  phone: string;
};

export type InputPropsType = {
  labelNames: string;
  type: string;
  option: {
    required: boolean;
    pattern: RegExp;
  };
  errorMessages: string;
};
