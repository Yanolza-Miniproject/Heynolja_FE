export const InputProps = [
  {
    labelNames: "email",
    type: "text",
    option: {
      required: true,
      pattern: /^[a-zA-Z0-9._+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
    },
    errorMessages: "이메일 형식이 아닙니다",
  },
  {
    labelNames: "password",
    type: "password",
    option: {
      required: true,
      pattern: /^[a-zA-Z0-9]{8,20}$/,
    },
    errorMessages: "비밀번호는 8~20자리입니다",
  },
];
