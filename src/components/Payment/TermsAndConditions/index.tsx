import * as Styled from "./TermsAndConditions.styles";

const index = () => {
  return (
    <Styled.TermsAndConditionsWrapper>
      <h3>약관 동의</h3>
      <Styled.InputWrapper>
        <label>
          <input type="checkbox" />
          필수 약관 전체 동의
        </label>
        <Styled.label>
          <input type="checkbox" />
          [필수] 만 14세 이상 이용 동의
        </Styled.label>
        <Styled.label>
          <input type="checkbox" />
          [필수] 개인정보 수집 및 이용
        </Styled.label>
        <Styled.label>
          <input type="checkbox" />
          [필수] 개인정보 제 3자 제공
        </Styled.label>
        <Styled.label>
          <input type="checkbox" />
          [선택] E-mail 및 SMS 광고성 정보 수신동의
        </Styled.label>
      </Styled.InputWrapper>
    </Styled.TermsAndConditionsWrapper>
  );
};

export default index;
