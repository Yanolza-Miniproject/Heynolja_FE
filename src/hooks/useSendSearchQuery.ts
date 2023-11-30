import { useRecoilValue } from "recoil";
import { searchStateAtom } from "../store/searchSelectorAtom";
import { useNavigate } from "react-router-dom";
import { QueryParams } from "../components/Search/SearchSelector/SearchSelector.types";

export const useSendSearchQuery = () => {
  const searchState = useRecoilValue(searchStateAtom);
  const navigate = useNavigate();

  const sendSearchQuery = () => {
    const optionsMap: Record<number, string> = {
      0: "categoryParking",
      1: "categoryCooking",
      2: "categoryPickup",
    };

    const queryParams: Partial<QueryParams> = {};

    searchState.selectedOptions.forEach((optionValue) => {
      if (optionValue !== 99) {
        const key = optionsMap[optionValue];
        queryParams[key] = "1";
      }
    });

    if (searchState.selectedRegion !== 99) {
      queryParams["region"] = searchState.selectedRegion.toString();
    }
    if (searchState.selectedType !== 99) {
      queryParams["type"] = searchState.selectedType.toString();
    }

    const queryString = new URLSearchParams(
      queryParams as Record<string, string>,
    ).toString();

    navigate(`/results?${queryString}`);
  };

  return sendSearchQuery;
};
