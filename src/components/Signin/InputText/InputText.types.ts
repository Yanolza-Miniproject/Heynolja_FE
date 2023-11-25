import { FieldErrors, UseFormRegister } from "react-hook-form";
import { InputPropsType } from "../../../pages/Signup/Signup.types";

export type InputTextProps = {
  data: InputPropsType;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: UseFormRegister<any>;
  errors: FieldErrors;
};
