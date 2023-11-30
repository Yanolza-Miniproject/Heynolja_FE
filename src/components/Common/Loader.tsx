import { PacmanLoader } from "react-spinners";
import { LoaderContainer, LoaderWrapper } from "./Common.styles";
import { useIsFetching } from "@tanstack/react-query";

export const Loader = () => {
  const isLoading = useIsFetching();

  return isLoading > 0 ? (
    <LoaderContainer>
      <LoaderWrapper>
        <PacmanLoader color="#FF5000" size={30} />
        <p>잠시만 기다려주세요.</p>
      </LoaderWrapper>
    </LoaderContainer>
  ) : null;
};
