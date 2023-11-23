import { useState } from "react";
import * as Styled from "./Search.styles";
import MapIcon from "../../assets/svg/map-icon.svg";
import AccomIcon from "../../assets/svg/accom-icon.svg";
import OptionIcon from "../../assets/svg/option-icon.svg";
import Type0 from "../../assets/image/type0.png";
import Type1 from "../../assets/image/type1.jpeg";
import Type2 from "../../assets/image/type2.jpg";
import Type3 from "../../assets/image/type3.jpg";
import Type4 from "../../assets/image/type4.jpg";
import Type5 from "../../assets/image/type5.jpg";
import Type6 from "../../assets/image/type6.png";
import Type7 from "../../assets/image/type7.jpg";
import Type8 from "../../assets/image/type8.png";
import Type9 from "../../assets/image/type9.png";
import { OptionImages, TypeImages } from "./Search.types";
import Option0 from "../../assets/svg/option0.svg";
import Option1 from "../../assets/svg/option1.svg";
import Option2 from "../../assets/svg/option2.svg";
import {
  SearchButton,
  SearchResetButton,
} from "../../components/Search/Button";

const Search = () => {
  const [selectedRegion, setSelectedRegion] = useState(99);
  const [selectedType, setSelectedType] = useState(99);
  const [selectedOptions, setSelectedOptions] = useState<number[]>([99]);

  const [isRegionSelected, setIsRegionSelected] = useState(false);
  const [isRegionHovered, setIsRegionHovered] = useState(false);
  const [isTypeSelected, setIsTypeSelected] = useState(false);
  const [isTypeHovered, setIsTypeHovered] = useState(false);
  const [isOptionSelected, setIsOptionSelected] = useState(false);
  const [isOptionHovered, setIsOptionHovered] = useState(false);

  const handleResetSearch = () => {
    setSelectedRegion(99);
    setSelectedType(99);
    setSelectedOptions([99]);
    setIsRegionSelected(false);
    setIsTypeSelected(false);
    setIsOptionSelected(false);
  };

  const handleRegionClick = (value: number) => {
    if (value === selectedRegion) {
      setSelectedRegion(99);
      setIsRegionSelected(false);
    } else {
      setSelectedRegion(value);
      setIsRegionSelected(true);
    }
  };

  const handleTypeClick = (value: number) => {
    if (value === selectedType) {
      setSelectedType(99);
      setIsTypeSelected(false);
    } else {
      setSelectedType(value);
      setIsTypeSelected(true);
    }
  };

  const handleOptionClick = (value: number) => {
    setSelectedOptions((currentOptions) => {
      if (value === 99) {
        setIsOptionSelected(true);
        return [99];
      } else {
        if (currentOptions.includes(99)) {
          setIsOptionSelected(true);
          return [value];
        } else if (currentOptions.includes(value)) {
          return currentOptions.filter((option) => option !== value);
        } else {
          return [...currentOptions, value];
        }
      }
    });
  };

  const handleOptionMouseEnter = () => {
    setIsOptionHovered(true);
    if (selectedOptions.length === 0) {
      setSelectedOptions([99]);
    }
  };

  const handleOptionMouseLeave = () => {
    setIsOptionHovered(false);
    if (selectedOptions.length === 1 && selectedOptions[0] === 99) {
      setSelectedOptions([99]);
    }
  };

  const [regions] = useState([
    { name: "전국", value: 99 },
    { name: "서울시", value: 0 },
    { name: "경기도", value: 1 },
    { name: "강원도", value: 2 },
    { name: "충청도", value: 3 },
    { name: "전라도", value: 4 },
    { name: "경상도", value: 5 },
    { name: "제주도", value: 6 },
  ]);

  const [types] = useState([
    { name: "전체 타입", value: 99 },
    { name: "호텔", value: 0 },
    { name: "콘도", value: 1 },
    { name: "호스텔", value: 2 },
    { name: "펜션", value: 3 },
    { name: "모텔", value: 4 },
    { name: "민박", value: 5 },
    { name: "게스트하우스", value: 6 },
    { name: "홈스테이", value: 7 },
    { name: "레지던스", value: 8 },
    { name: "한옥", value: 9 },
  ]);

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

  const [options] = useState([
    { name: "상관 없음", value: 99 },
    { name: "주차 가능", value: 0 },
    { name: "조리 가능", value: 1 },
    { name: "픽업 가능", value: 2 },
  ]);

  const optionImages: OptionImages = {
    0: Option0,
    1: Option1,
    2: Option2,
  };

  return (
    <>
      <Styled.Container>
        <Styled.SearchHeader>
          <h2>원하시는 숙소를 찾아드릴게요 👀 ❤️</h2>
          <Styled.SearchParamsWrapper>
            <Styled.SearchParams>
              <div className="region">
                {`${regions.find((region) => region.value === selectedRegion)
                  ?.name} `}
              </div>

              <div className="type">
                {`${types.find((type) => type.value === selectedType)?.name} `}
              </div>

              <div className="option">
                {selectedOptions.map((optionValue, index) => (
                  <div className="option-each" key={index}>
                    {
                      options.find((option) => option.value === optionValue)
                        ?.name
                    }
                  </div>
                ))}
              </div>
            </Styled.SearchParams>
            <SearchResetButton onClick={handleResetSearch} />
          </Styled.SearchParamsWrapper>
        </Styled.SearchHeader>

        <Styled.SearchCard>
          <Styled.SearchCardWrapper
            onMouseEnter={() => setIsRegionHovered(true)}
            onMouseLeave={() => setIsRegionHovered(false)}
          >
            <span>
              Check 1<h2>지역 선택</h2>
              {!isRegionHovered && <img src={MapIcon} alt="region-selector" />}
            </span>
            {isRegionHovered && (
              <Styled.RegionList>
                {regions.map((region) => (
                  <Styled.RegionItem
                    key={region.value}
                    selected={selectedRegion === region.value}
                    onClick={() => handleRegionClick(region.value)}
                  >
                    {region.name}
                  </Styled.RegionItem>
                ))}
              </Styled.RegionList>
            )}
            {!isRegionHovered && isRegionSelected && (
              <Styled.SelectedItemDisplay>
                {!isRegionHovered &&
                  regions.find((region) => region.value === selectedRegion)
                    ?.name}{" "}
                ✔️
              </Styled.SelectedItemDisplay>
            )}
          </Styled.SearchCardWrapper>

          <Styled.SearchCardWrapper
            onMouseEnter={() => setIsTypeHovered(true)}
            onMouseLeave={() => setIsTypeHovered(false)}
          >
            <span>
              Check 2<h2>숙소 타입</h2>
              {!isTypeHovered && <img src={AccomIcon} alt="type-selector" />}
            </span>
            {isTypeHovered && (
              <Styled.TypeList>
                {types.map((type) => (
                  <Styled.TypeItem
                    key={type.value}
                    selected={selectedType === type.value}
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
            {!isTypeHovered && isTypeSelected && (
              <Styled.SelectedItemDisplay>
                {types.find((type) => type.value === selectedType)?.name} ✔️
              </Styled.SelectedItemDisplay>
            )}
          </Styled.SearchCardWrapper>

          <Styled.SearchCardWrapper
            onMouseEnter={handleOptionMouseEnter}
            onMouseLeave={handleOptionMouseLeave}
          >
            <span>
              Check 3<h2>추가 옵션</h2>
              {!isOptionHovered && (
                <img src={OptionIcon} alt="option-selector" />
              )}
            </span>
            {isOptionHovered && (
              <Styled.OptionList>
                {options.map((option) => (
                  <Styled.OptionItem
                    key={option.value}
                    selected={selectedOptions.includes(option.value)}
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
            {!isOptionHovered && isOptionSelected && (
              <Styled.SelectedItemDisplay>
                {selectedOptions.map((selectedValue) => {
                  const optionName = options.find(
                    (option) => option.value === selectedValue,
                  )?.name;
                  return <div key={selectedValue}>{optionName} ✔️</div>;
                })}
              </Styled.SelectedItemDisplay>
            )}
          </Styled.SearchCardWrapper>
          <SearchButton />
        </Styled.SearchCard>
      </Styled.Container>
    </>
  );
};

export default Search;
