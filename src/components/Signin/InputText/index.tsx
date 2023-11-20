import * as Styled from "./InputText.styles";
import { InputTextProps } from "./InputText.types";

const InputText = ({ data, register, errors }: InputTextProps) => {
  return (
    <Styled.InputTextWrapper>
      <Styled.CustomTextField
        type={data.type}
        label={data.labelNames}
        variant="standard"
        {...register(`${data.labelNames}`, data.option)}
      />
      {errors[data.labelNames] && (
        <Styled.InputTextError>{data.errorMessages}</Styled.InputTextError>
      )}
    </Styled.InputTextWrapper>
  );
};

export default InputText;
