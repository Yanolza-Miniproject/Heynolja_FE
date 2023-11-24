import { ChangeEvent } from "react";

export interface TermsProps {
  id?: string;
  checked?: boolean;
  idArray: [];
  onChange?: (evnet: ChangeEvent<HTMLInputElement>) => void;
}
