import { useLocation } from "react-router-dom";

const useGetValidParams = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  const getNumberParam = (param: string, defaultValue: number | boolean) => {
    const value = searchParams.get(param);
    return value !== null ? Number(value) : defaultValue;
  };

  const validParams = {
    region: getNumberParam("region", false),
    type: getNumberParam("type", false),
    categoryCooking: getNumberParam("categoryCooking", false),
    categoryParking: getNumberParam("categoryParking", false),
    categoryPickup: getNumberParam("categoryPickup", false),
  };

  return validParams;
};

export default useGetValidParams;
