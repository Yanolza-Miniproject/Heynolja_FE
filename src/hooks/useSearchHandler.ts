import { useRecoilState } from "recoil";
import { searchStateAtom } from "../store/searchSelectorAtom";

export const useSearchHandlers = () => {
  const [searchState, setSearchState] = useRecoilState(searchStateAtom);

  const handleRegionClick = (value: number) => {
    setSearchState({
      ...searchState,
      selectedRegion: value,
      isRegionSelected: value !== 99,
    });
  };

  const handleTypeClick = (value: number) => {
    setSearchState({
      ...searchState,
      selectedType: value,
      isTypeSelected: value !== 99,
    });
  };

  const handleOptionClick = (value: number) => {
    setSearchState((current) => {
      if (value === 99) {
        return {
          ...current,
          selectedOptions: [99],
          isOptionsSelected: true,
        };
      } else {
        const newOptions = current.selectedOptions.includes(value)
          ? current.selectedOptions.filter(
              (option) => option !== value && option !== 99,
            )
          : [
              ...current.selectedOptions.filter((option) => option !== 99),
              value,
            ];

        return {
          ...current,
          selectedOptions: newOptions,
          isOptionsSelected: newOptions.length > 0,
        };
      }
    });
  };

  const handleRegionMouseEnter = () => {
    setSearchState({
      ...searchState,
      isRegionHovered: true,
    });
  };

  const handleRegionMouseLeave = () => {
    setSearchState({
      ...searchState,
      isRegionHovered: false,
    });
  };

  const handleTypeMouseEnter = () => {
    setSearchState({
      ...searchState,
      isTypeHovered: true,
    });
  };

  const handleTypeMouseLeave = () => {
    setSearchState({
      ...searchState,
      isTypeHovered: false,
    });
  };

  const handleOptionMouseEnter = () => {
    setSearchState({
      ...searchState,
      isOptionsHovered: true,
    });
  };

  const handleOptionMouseLeave = () => {
    setSearchState({
      ...searchState,
      isOptionsHovered: false,
    });
  };

  const handleResetSearch = () => {
    setSearchState({
      selectedRegion: 99,
      selectedType: 99,
      selectedOptions: [99],
      isRegionSelected: false,
      isTypeSelected: false,
      isOptionsSelected: false,
      isOptionsHovered: false,
      isRegionHovered: false,
      isTypeHovered: false,
    });
  };

  return {
    handleRegionClick,
    handleTypeClick,
    handleOptionClick,
    handleRegionMouseEnter,
    handleRegionMouseLeave,
    handleTypeMouseEnter,
    handleTypeMouseLeave,
    handleOptionMouseEnter,
    handleOptionMouseLeave,
    handleResetSearch,
  };
};
