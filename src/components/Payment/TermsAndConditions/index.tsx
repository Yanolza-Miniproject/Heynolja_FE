import { useEffect, useState } from "react";
import { CheckBox } from "../../Cart/Checkbox/Checkbox";
import * as Styled from "./TermsAndConditions.styles";
import { useSetRecoilState } from "recoil";
import { termsState } from "../../../store/purchaseAtom";

const TermsAndConditions = () => {
  const data = [
    { id: 0, title: "[필수] 만 14세 이상 이용 동의" },
    { id: 1, title: "[필수] 개인정보 수집 및 이용" },
    { id: 2, title: "[필수] 개인정보 제 3자 제공" },
  ];

  const [checkItems, setCheckItems] = useState<number[]>([]);
  const setTermsAllChecked = useSetRecoilState(termsState);

  //체크박스 단일 선택
  const handleSingleCheck = (e) => {
    if (e.target.checked) {
      setCheckItems([...checkItems, Number(e.target.id)]);
    } else {
      setCheckItems(checkItems.filter((id) => id != Number(e.target.id)));
    }
  };

  //체크박스 전체 선택
  const handleAllCheck = (e) => {
    if (e.target.checked) {
      const items: number[] = [];
      Object.entries(data).map((item, i) => {
        items[i] = item[1].id;
      });
      setCheckItems(items);
      setTermsAllChecked(true);
    } else {
      // 전체 체크/해제용 체크박스가 해제되었을 때 배열 초기화
      setCheckItems([]);
      setTermsAllChecked(false);
    }
  };

  useEffect(() => {
    if (checkItems.length === data.length) {
      setTermsAllChecked(true);
    } else setTermsAllChecked(false);
  }, [checkItems]);

  return (
    <Styled.TermsAndConditionsWrapper>
      <Styled.Title>약관 동의</Styled.Title>
      <Styled.InputWrapper>
        <Styled.Mainlabel>
          <CheckBox
            type="checkbox"
            onChange={(e) => handleAllCheck(e)}
            checked={checkItems.length === data.length ? true : false}
          />
          필수 약관 전체 동의
        </Styled.Mainlabel>
        {data?.map((data) => (
          <Styled.label htmlFor={data.id.toString()}>
            <CheckBox
              id={data.id.toString()}
              type="checkbox"
              onChange={(e) => handleSingleCheck(e)}
              // 체크된 아이템 배열에 해당 아이템이 있을 경우 선택 활성화, 아닐 시 해제
              checked={checkItems.includes(data.id) ? true : false}
            />
            {data.title}
          </Styled.label>
        ))}
        <Styled.label>
          <CheckBox type="checkbox" />
          [선택] 광고성 정보 수신 동의
        </Styled.label>
      </Styled.InputWrapper>
    </Styled.TermsAndConditionsWrapper>
  );
};

export default TermsAndConditions;
