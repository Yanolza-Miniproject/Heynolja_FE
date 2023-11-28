import * as Styled from "../SearchSelector.styles";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { useSearchHandlers } from "../../../../hooks/useSearchHandler";
import { searchStateAtom } from "../../../../store/searchSelectorAtom";
import OptionIcon from "../../../../assets/svg/option-icon.svg";
import Option0 from "../../../../assets/svg/option0.svg";
import Option1 from "../../../../assets/svg/option1.svg";
import Option2 from "../../../../assets/svg/option2.svg";
import { OptionImages } from "../SearchSelector.types";

const optionImages: OptionImages = {
  0: Option0,
  1: Option1,
  2: Option2,
};

type Option = {
  name: string;
  value: number;
};

type OptionsWrapperProps = {
  options: Option[];
};

export const OptionsWrapper = ({ options }: OptionsWrapperProps) => {
  const searchState = useRecoilValue(searchStateAtom);
  const setSearchState = useSetRecoilState(searchStateAtom);
  const { handleOptionClick } = useSearchHandlers();

  return (
    <Styled.SearchCardWrapper
      onMouseEnter={() =>
        setSearchState((current) => ({ ...current, isOptionsHovered: true }))
      }
      onMouseLeave={() =>
        setSearchState((current) => ({ ...current, isOptionsHovered: false }))
      }
    >
      <span>
        Check 3<h2>추가 옵션</h2>
        {!searchState.isOptionsHovered && (
          <img src={OptionIcon} alt="option-selector" />
        )}
      </span>
      {searchState.isOptionsHovered && (
        <Styled.OptionList>
          {options.map((option) => (
            <Styled.OptionItem
              key={option.value}
              selected={searchState.selectedOptions.includes(option.value)}
              onClick={() => handleOptionClick(option.value)}
            >
              {option.name}
              {option.name !== "상관 없음" && (
                <img src={optionImages[option.value]} alt={option.name} />
              )}
            </Styled.OptionItem>
          ))}
        </Styled.OptionList>
      )}
      {!searchState.isOptionsHovered && searchState.isOptionsSelected && (
        <Styled.SelectedItemDisplay>
          {searchState.selectedOptions.map((selectedValue) => {
            const optionName = options.find(
              (option) => option.value === selectedValue,
            )?.name;
            return <div key={selectedValue}>{optionName} ✔️</div>;
          })}
        </Styled.SelectedItemDisplay>
      )}
    </Styled.SearchCardWrapper>
  );
};
