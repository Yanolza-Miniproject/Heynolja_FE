import { useState } from "react";
import * as Styled from "./Search.styles";
import MapIcon from "../../assets/svg/map-icon.svg";
import AccomIcon from "../../assets/svg/accom-icon.svg";
import OptionIcon from "../../assets/svg/option-icon.svg";
import HotelImg from "../../assets/image/hotel-default.jpg";

const Search = () => {
  const [selectedRegion, setSelectedRegion] = useState("99");
  const [selectedType, setSelectedType] = useState("99");
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const [isRegionSelected, setIsRegionSelected] = useState(false);
  const [isRegionHovered, setIsRegionHovered] = useState(false);
  const [isTypeSelected, setIsTypeSelected] = useState(false);
  const [isTypeHovered, setIsTypeHovered] = useState(false);
  const [isOptionHovered, setIsOptionHovered] = useState(false);

  const handleRegionClick = (value: string) => {
    if (value === selectedRegion) {
      setSelectedRegion("99");
      setIsRegionSelected(false);
    } else {
      setSelectedRegion(value);
      setIsRegionSelected(true);
    }
  };

  const handleTypeClick = (value: string) => {
    if (value === selectedType) {
      setSelectedType("99");
      setIsTypeSelected(false);
    } else {
      setSelectedType(value);
      setIsTypeSelected(true);
    }
  };

  const handleOptionClick = (value: string) => {
    setSelectedOptions((currentOptions) => {
      if (value === "99") {
        return ["99"];
      } else {
        if (currentOptions.includes("99")) {
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
      setSelectedOptions(["99"]);
    }
  };

  const handleOptionMouseLeave = () => {
    setIsOptionHovered(false);
    if (selectedOptions.length === 1 && selectedOptions[0] === "99") {
      setSelectedOptions([]);
    }
  };

  const [regions] = useState([
    { name: "전국", value: "99" },
    { name: "서울", value: "0" },
    { name: "경기", value: "1" },
    { name: "강원", value: "2" },
    { name: "충청", value: "3" },
    { name: "전라", value: "4" },
    { name: "경상", value: "5" },
    { name: "제주", value: "6" },
  ]);

  const [types] = useState([
    { name: "전체 타입", value: "99" },
    { name: "호텔", value: "0" },
    { name: "콘도", value: "1" },
    { name: "호스텔", value: "2" },
    { name: "펜션", value: "3" },
    { name: "모텔", value: "4" },
    { name: "민박", value: "5" },
    { name: "게스트하우스", value: "6" },
    { name: "홈스테이", value: "7" },
    { name: "레지던스", value: "8" },
    { name: "한옥", value: "9" },
  ]);

  const [options] = useState([
    { name: "상관 없음", value: "99" },
    { name: "주차 가능", value: "0" },
    { name: "취사 가능", value: "1" },
    { name: "픽업 가능", value: "2" },
  ]);

  return (
    <Styled.Container>
      <h2>원하시는 숙소를 찾아드릴게요.</h2>
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
                    <img src={HotelImg} alt={type.name} />
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
            {!isOptionHovered && <img src={OptionIcon} alt="option-selector" />}
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
                  <img src={HotelImg} alt="hotel" />
                </Styled.OptionItem>
              ))}
            </Styled.OptionList>
          )}
          {!isOptionHovered && selectedOptions.length > 0 && (
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
      </Styled.SearchCard>
    </Styled.Container>
  );
};

export default Search;
