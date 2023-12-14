import { useRecoilState } from "recoil";
import { defaultSelector, searchStateAtom } from "../store/searchSelectorAtom";

export const useSearchHandlers = () => {
  const [searchState, setSearchState] = useRecoilState(searchStateAtom);

  const handleRegionClick = (value: number) => {
    setSearchState({
      ...searchState,
      selectedRegion: value,
      isRegionSelected: value !== defaultSelector,
    });
  };

  const handleTypeClick = (value: number) => {
    setSearchState({
      ...searchState,
      selectedType: value,
      isTypeSelected: value !== defaultSelector,
    });
  };

  const handleOptionClick = (value: number) => {
    setSearchState((current) => {
      if (value === defaultSelector) {
        return {
          ...current,
          selectedOptions: [defaultSelector],
          isOptionsSelected: true,
        };
      } else {
        const newOptions = current.selectedOptions.includes(value)
          ? current.selectedOptions.filter(
              (option) => option !== value && option !== defaultSelector,
            )
          : [
              ...current.selectedOptions.filter(
                (option) => option !== defaultSelector,
              ),
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
      selectedRegion: defaultSelector,
      selectedType: defaultSelector,
      selectedOptions: [defaultSelector],
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
