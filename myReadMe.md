## 객체 내의 여러 값에 접근할 땐 destructuring을 활용

### 문제 사항

객체 내의 여러 값에 접근할 때 너무 많은 프로토타입 체인이 필요하다.

### 해결 과정

axios의 data를 destructuring을 활용하여 작성하니 코드가 한결 깔끔해진 것 같음 앞으로 axios의 return data에서 많은 프로퍼티에 접근할 때는 destructuring을 사용

```javascript
export const fetchSignin = async ({ email, password }: SignInInputs) => {
  const { data, headers } = await baseInstance.post("members/login", {
    email,
    password,
  });

  const returnData = {
    accessToken: headers["access_token"],
    refreshToken: headers["refresh_token"],
    message: data.message,
    memberId: data.data.memberId,
    nickname: data.data.nickname,
  };

  return returnData;
};
```

## Conditional Objects를 다루는 방법

### 문제 사항

필요한 쿼리 파라미터만 보내야 하기 때문에 조건부로 query parameter를 넣어주어야 겠다고 생각했습니다.

```javascript
const data = await authInstance.get(
  `accommodations?page=${pageParam}${regionUrl}${typeUrl}${categoryParkingUrl}${categoryCookingUrl}${categoryPickupUrl}`,
);
```

### 문제 인식

문자열에 어떤 값이 들어갈 지 도 모르고, 추적도 어려운 것 같습니다. 혹여나 다른 사람이 코드를 수정한다 하더라도 정말 너무 어렵고 주먹구구식으로 작성된 코드라는 것을 알 수 있었습니다. 따라서 axios의 params object를 활용하였습니다.

### 해결 과정

1. 객체의 Spread Operator를 사용

가장 먼저 params 객체 자체를 만들어주는 방법에 대해서 생각해보았습니다. 조건부에 따라서 params 객체를 반환하는 함수를 만들어서 관리하자는 것이 처음 생각이었습니다.

```javascript
const validParams = (param: string, value: number | boolean) => {
  return value === false ? {} : { [param]: String(value) };
};

export const fetchCatgory = async (
  pageParam: number,
  props: CategoryFilterParams,
) => {
  const params = {
    ...validParams("region01", props.region01),
    ...validParams("type", props.type),
    ...validParams("categoryParking", props.categoryParking),
    ...validParams("categoryCooking", props.categoryCooking),
    ...validParams("categoryPickup", props.categoryPickup),
  };

  const baseUrl = `accommodations?page=${pageParam}`;

  try {
    const data = isLoggedIn()
      ? await authInstance.get(baseUrl, { params })
      : await baseInstance.get(baseUrl, { params });

    return data.data;
  } catch (error) {
    return error;
  }
};
```

해당 과정을 거치니 기존 URL에 잘못된 정보가 들어가거나, 코드의 가독성이 불편한 문제는 어느정도 해결된 것 같았습니다. 그러나 코드가 길어지고 객체를 6개 만들어서 spread operator를 통해 푸는 형식이다 보니까 가독성도 안 좋고, 코드도 길어지는 단점이 있었던 것 같습니다. 또한 코드가 반복되니까 불필요한 코드 작성도 들어간 것 같았습니다..

2. for in을 사용해서 객체에 넣기

객체의 key 값을 순회할 수 있는 for in을 사용해서 객체를 만들기로 하였습니다. props를 분리하고, 필요한 props를 for in으로 순회하면서 유효한 프로퍼티만 params 객체에 추가하려고 하였습니다.

```javascript
export const fetchCatgory = async (
  pageParam: number,
  props: CategoryFilterParams,
) => {

  type paramsType3 = Record<keyof CategoryFilterParams, string>;

  const params: Partial<paramsType3> = {};

  for (const key in props) {
    if (props[key as keyof CategoryFilterParams] !== false) {
      params[key as keyof paramsType3] = String(
        props[key as keyof CategoryFilterParams],
      );
    }
  }

  const baseUrl = `accommodations?page=${pageParam}`;

  try {
    const data = isLoggedIn()
      ? await authInstance.get(baseUrl, { params })
      : await baseInstance.get(baseUrl, { params });

    return data.data;
  } catch (error) {
    return error;
  }
};
```

다음과 같이 코드를 작성하니 불필요한 코드의 수가 줄어들고 가독성 또한 좋아진 느낌이었습니다. 그러나 코드에서 반복문을 사용하면 코드에서 테스트할 경우들이 많아지고 side effect가 발생할 수 도 있다는 것을 배웠습니다. 따라서 이 점을 개선해볼 필요가 있었습니다.

3. Object.entries().reduce 활용

중점은 반복을 돌면서 하나하나 축적해 나아가는 기능이었습니다. 이를 위해서는 reduce 고차함수가 필요했고 reduce를 적용하기 위해서 Object.entries()라는 메서드를 사용할 수 있다는 것을 알 수 있었습니다. 따라서 props를 Object.entries()를 사용해서 배열로 만들고 reduce로 원하는 객체를 만들었습니다.

```javascript
export const fetchCatgory = async (
  pageParam: number,
  props: CategoryFilterParams,
) => {
  type paramsType3 = Record<keyof CategoryFilterParams, string>;

  const initialParams: Partial<paramsType3> = {};

  const params: Partial<paramsType3> = Object.entries(props).reduce(
    (acc, [key, value]) => {
      if (value !== false) {
        acc[key as keyof paramsType3] = String(value);
      }
      return acc;
    },
    initialParams,
  );

  const baseUrl = `accommodations?page=${pageParam}`;

  try {
    const data = isLoggedIn()
      ? await authInstance.get(baseUrl, { params })
      : await baseInstance.get(baseUrl, { params });

    return data.data;
  } catch (error) {
    return error;
  }
};
```

코드가 훨씬 더 가독성이 있고 간결해진 것 같습니다. 고차함수를 사용하다보니 반복문에 대한 부작용을 걱정하지 않아도 되는 것 같습니다.

### 추가 공부 사항

Axios의 get Method는 두번째 파라미터로 쿼리파라미터에 대한 파라미터 프로퍼티를 받는다. 따라서 두번째 파라미터 객체안에 들어갈 쿼리 파라미터 객체를 넣어주어야 한다.
