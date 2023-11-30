## ✨미니프로젝트 4조 - 아버지날보고있다면정답을알려조✨

### **FE팀**

`팀장: 이용훈`
`팀원: 김미정, 김민섭, 이승연, 박수연`

## _🏖️ 행복한 여행, 즐거운 시간. 'HEY놀자!' 🏖️_

> 바쁜 일상에 지친 여러분, 다음 목적지는 휴식입니다.
> 나의 소중한 하루를 선사할 곳을 'HEY놀자'에서 만나보세요!

```sh
배포 주소 : https://heynolja-mini-4.vercel.app/
```

## 'HEY놀자'는 이런 곳이에요.

- 내 위치 기반/ 인기순 /주차 가능 숙소 등 다양한 카테고리의 숙소를 보실 수 있어요.
- 지역별, 숙소 타입별, 추가 옵션 여부 등 내 입맛에 맞는 숙소를 찾아볼 수 있어요.
- 숙소별 상세 안내, 일자별 객실 가능 여부 등의 다양한 정보를 확인할 수 있어요.
- 마음에 쏙 드는 숙소는 내 카트에 담아두거나, 결제하여 예약할 수 있어요.
- 언제라도 꼭 가고 싶은 숙소, ❤️[찜하기] 기능을 이용해보세요.

## 프로젝트 세부 정보
### 📍개발 환경 
<img alt="visualstudiocode" src="https://img.shields.io/badge/visualstudiocode-007ACC.svg?&style=for-the-badge&logo=visualstudiocode&logoColor=white"/> <img alt="git" src="https://img.shields.io/badge/git-F05032.svg?&style=for-the-badge&logo=git&logoColor=white"/> <img alt="github" src="https://img.shields.io/badge/github-181717.svg?&style=for-the-badge&logo=github&logoColor=white"/> <img alt="eslint" src="https://img.shields.io/badge/eslint-58A616.svg?&style=for-the-badge&logo=eslint&logoColor=white"/> <img alt="prettier" src="https://img.shields.io/badge/prettier-F7B93E.svg?&style=for-the-badge&logo=prettier&logoColor=white"/> <img alt="husky" src="https://img.shields.io/badge/husky-FFE033.svg?&style=for-the-badge&logo=husky&logoColor=white"/> <img alt="vite" src="https://img.shields.io/badge/vite-646CFF.svg?&style=for-the-badge&logo=vite&logoColor=white"/>
### 📍배포
<img alt="vercel" src="https://img.shields.io/badge/vercel-1BB3A4.svg?&style=for-the-badge&logo=vercel&logoColor=white"/> 

### 📍사용 기술 
<img alt="react" src="https://img.shields.io/badge/react-61DAFB.svg?&style=for-the-badge&logo=react&logoColor=black"/> <img alt="typescript" src="https://img.shields.io/badge/typescript-3178C6.svg?&style=for-the-badge&logo=typescript&logoColor=white"/> <img alt="reactrouter" src="https://img.shields.io/badge/reactrouter-CA4245.svg?&style=for-the-badge&logo=reactrouter&logoColor=white"/> <img alt="recoil" src="https://img.shields.io/badge/recoil-3578E5.svg?&style=for-the-badge&logo=recoil&logoColor=white"/> <img alt="emotion" src="https://img.shields.io/badge/emotion-D26AC2.svg?&style=for-the-badge&logo=emotion&logoColor=white"/> <img alt="reactquery" src="https://img.shields.io/badge/reactquery-FF4154.svg?&style=for-the-badge&logo=reactquery&logoColor=white"/> <img alt="msw" src="https://img.shields.io/badge/msw-9A8555.svg?&style=for-the-badge&logo=msw&logoColor=white"/> <img alt="jest" src="https://img.shields.io/badge/jest-C21325.svg?&style=for-the-badge&logo=jest&logoColor=white"/>

### 📍협업 툴
<img alt="notion" src="https://img.shields.io/badge

### 팀원별 담당 페이지 소개

| 팀원         | 담당 페이지      |
| ------------ | ---------------- |
| 이용훈(팀장) | ㅁㄴㅇㄹㄴㅁㄹ   |
| 김미정       | ㅁㄴㅇㄹㄴㅁㅇㄹ |
| 김민섭       | ㅁㄴㄹㅇㄴㅁㅇㄹ |
| 이승연       | ㅁㄴㅇㄹㅁㄴㄹㅇ |
| 박수연       | ㅁㄴㄹㅇㅁㄴㄹ   |

### 주요 구현 내용

```sh
# 테마별 숙소 추천 로직 구현
- 사용자의 빠른 선택을 도울 수 있도록 GPS 기준 지역별 숙소 추천, 인기 숙소 안내 등의 기능을 제공합니다.
```

```sh
# 회원가입, 로그인 기능 및 인증, 404페이지
- 이메일과 비밀번호 기준으로 회원가입을 진행하며, 이를 기준으로 로그인 할 수 있습니다.
- 인증이 필요한 페이지의 경우 미인증 회원이 접근할 시 로그인 페이지로 이동됩니다.
- 접근이 불가한 주소로 이동 시 404페이지로 이동합니다.
```

```sh
# 숙소 조회를 위한 다양한 검색 필터 지원, 개별 상품 페이지 제공
- 숙소 타입, 장소, 추가 옵션별로 원하는 카테고리를 선택하여 숙소를 조회할 수 있습니다.
- 미선택시 전체 상품 조회가 가능합니다.
- 특정 숙소 클릭시 해당 숙소에 대한 상세 정보와 품절여부를 확인할 수 있으며 장바구니 담기 및 바로 주문하기를 진행할 수 있습니다.
```

```sh
# 장바구니, 결제하기
- 숙소 상세페이지를 통해 희망하는 날짜/인원수를 설정하여 장바구니에 추가할 수 있습니다.
- 장바구니에서 결제 진행할 숙소를 선택하고, 결제하기 페이지로 이동할 수 있습니다.
- 결제하기 페이지내에서 주문하려는 상품을 다시 한 번 확인하고, 만 14세 이상 이용 동의 체크박스를 필수로 입력 받은 후 결제할 수 있습니다.
- 결제 완료된 경우 완료 페이지내에서 결제한 정보를 확인할 수 있습니다.
```

```sh
# 회원의 경우 결제 이력, 장바구니, 찜목록 관리 기능 제공
- 여태 주문한 모든 주문 이력을 건별로 상세하게 확인할 수 있습니다.
- 장바구니에 담아둔 상품의 데이터를 보여주며, 실제 결제할 상품을 선택하고 진행할 수 있습니다.
- 하트 아이콘을 통해 찜목록에 추가했던 숙소들을 확인할 수 있습니다.
```
