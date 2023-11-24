import { useLocation } from "react-router-dom";

const useGetValidParams = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  const getNumberParam = (param: string, defaultValue: number) => {
    const value = searchParams.get(param);
    return value !== null ? Number(value) : defaultValue;
  };

  const validParams = {
    region: getNumberParam("region", 99),
    type: getNumberParam("type", 99),
    category_cooking: getNumberParam("category_cooking", 2),
    category_parking: getNumberParam("category_parking", 2),
    category_pickup: getNumberParam("category_pickup", 2),
  };

  return validParams;
};

export default useGetValidParams;
