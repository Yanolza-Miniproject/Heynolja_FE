import { RefObject } from "react";

export type HeartClickProps = {
  likes: number;
  likes_clicked: boolean;
  ref: RefObject<HTMLDivElement>;
};
