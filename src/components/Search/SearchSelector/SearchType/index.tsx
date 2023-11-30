import * as Styled from "../SearchSelector.styles";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { useSearchHandlers } from "../../../../hooks/useSearchHandler";
import { searchStateAtom } from "../../../../store/searchSelectorAtom";
import AccomIcon from "../../../../assets/svg/accom-icon.svg";
import Type0 from "../../../../assets/image/type0.png";
import Type1 from "../../../../assets/image/type1.jpeg";
import Type2 from "../../../../assets/image/type2.jpg";
import Type3 from "../../../../assets/image/type3.jpg";
import Type4 from "../../../../assets/image/type4.jpg";
import Type5 from "../../../../assets/image/type5.jpg";
import Type6 from "../../../../assets/image/type6.png";
import Type7 from "../../../../assets/image/type7.jpg";
import Type8 from "../../../../assets/image/type8.png";
import Type9 from "../../../../assets/image/type9.png";
import { TypeImages } from "../SearchSelector.types";

const typeImages: TypeImages = {
  0: Type0,
  1: Type1,
  2: Type2,
  3: Type3,
  4: Type4,
  5: Type5,
  6: Type6,
  7: Type7,
  8: Type8,
  9: Type9,
};

type Type = {
  name: string;
  value: number;
};

type TypeWrapperProps = {
  types: Type[];
};

export const TypeWrapper = ({ types }: TypeWrapperProps) => {
  const searchState = useRecoilValue(searchStateAtom);
  const setSearchState = useSetRecoilState(searchStateAtom);
  const { handleTypeClick } = useSearchHandlers();

  return (
    <>
      <Styled.SearchCardWrapper
        onMouseEnter={() =>
          setSearchState((current) => ({ ...current, isTypeHovered: true }))
        }
        onMouseLeave={() =>
          setSearchState((current) => ({ ...current, isTypeHovered: false }))
        }
        isType={true}
      >
        <span>
          Check 2<h2>숙소 타입</h2>
          {!searchState.isTypeHovered && (
            <img src={AccomIcon} alt="type-selector" />
          )}
        </span>
        {searchState.isTypeHovered && (
          <Styled.TypeList>
            {types.map((type) => (
              <Styled.TypeItem
                key={type.value}
                selected={searchState.selectedType === type.value}
                onClick={() => handleTypeClick(type.value)}
                isFullWidth={type.name === "전체 타입"}
              >
                {type.name}
                {type.name !== "전체 타입" && (
                  <img src={typeImages[type.value]} alt={type.name} />
                )}
              </Styled.TypeItem>
            ))}
          </Styled.TypeList>
        )}
        {!searchState.isTypeHovered && searchState.isTypeSelected && (
          <Styled.SelectedItemDisplay>
            {
              types.find((type) => type.value === searchState.selectedType)
                ?.name
            }{" "}
            ✔️
          </Styled.SelectedItemDisplay>
        )}
      </Styled.SearchCardWrapper>
    </>
  );
};
