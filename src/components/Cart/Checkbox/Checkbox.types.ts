import { ChangeEvent } from "react";

export interface CheckboxProps {
  id?: string;
  checked?: boolean;
  onChange?: (evnet: ChangeEvent<HTMLInputElement>) => void;
}
