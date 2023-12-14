import * as Styled from "./Checkbox";
import { CheckboxProps } from "./Checkbox.types";

const Checkbox = ({ id, checked, onChange }: CheckboxProps) => {
  return (
    <Styled.CheckBox
      type="checkbox"
      id={id}
      checked={checked}
      onChange={onChange}
    />
  );
};

export default Checkbox;
