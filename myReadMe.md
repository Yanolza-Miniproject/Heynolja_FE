## 객체 내의 여러 값에 접근할 땐 destructuring을 활용

문제 : 객체 내의 여러 값에 접근할 때 너무 많은 프로토타입 체인이 필요하다.

해결 : axios의 data를 destructuring을 활용하여 작성하니 코드가 한결 깔끔해진 것 같음 앞으로 axios의 return data에서 많은 프로퍼티에 접근할 때는 destructuring을 사용

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

해당 문제의 원인은 조건부로 들어올 수 있는 객체를 어떻게 props로 넘겨주는가 였다.

1. 객체의 Spread Operator를 사용

```javascript
const validParams = (param: string, value: number | boolean) => {
  return value === false ? {} : { [param]: String(value) };
};

export const fetchCatgory = async (props: fetchCatgoryProps) => {
  const params = {
    ...validParams("page", props.pageParam),
    ...validParams("region01", props.region),
    ...validParams("type", props.type),
    ...validParams("categoryParking", props.categoryParking),
    ...validParams("categoryCooking", props.categoryCooking),
    ...validParams("categoryPickup", props.categoryPickup),
  };

  console.log(params);

  const baseUrl = "accommodations";

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

다음과 같이 함수를 통해서 유효하다면 객체를, 아니라면 빈 객체를 넣어서 반환하고자 하였다.

2. for in을 사용해서 객체에 넣기

```javascript
  type paramsType3 = Record<keyof fetchCatgoryProps, string>;

  const params2: Partial<paramsType3> = {};

  for (const key in props) {
    if (props[key as keyof fetchCatgoryProps] !== false) {
      params2[key as keyof paramsType3] = String(
        props[key as keyof fetchCatgoryProps],
      );
    }
  }
```

Axios의 get Method는 두번째 파라미터로 쿼리파라미터에 대한 파라미터 프로퍼티를 받는다. 따라서 두번째 파라미터 객체안에 들어갈 쿼리 파라미터 객체를 넣어주어야 한다.
