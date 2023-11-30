import LoaderImg from "../../assets/svg/loader.svg";
import { LoaderWrapper } from "./Common.styles";

interface LoaderProps {
  isLoading: boolean;
}

const Loader = (props: LoaderProps) => {
  const check = props.isLoading == null ? false : props.isLoading;

  return (
    check && (
      <LoaderWrapper
        style={{ display: props.isLoading === true ? "block" : "none" }}
      >
        <img src={LoaderImg} alt="loading" />
      </LoaderWrapper>
    )
  );
};

export default Loader;
