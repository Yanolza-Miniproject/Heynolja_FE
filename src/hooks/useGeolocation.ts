import axios from "axios";
import { useEffect, useState } from "react";

interface Location {
  isLoading: boolean;
  coordinate?: { lat: number; lng: number };
  error?: { code: number; message: string };
  cityCode: number;
}

// reverseGeocoded 에서 요청받은 데이터의 타입 입니다. 참고 하셔도 될 거 같아요!!
// type ReverseGeocodedData = {
//   latitude: number;
//   longitude: number;
//   continent: string;
//   lookupSource: string;
//   continentCode: string;
//   localityLanguageRequested: string;
//   city: string;
//   countryName: string;
//   countryCode: string;
//   postcode: string;
//   principalSubdivision: string;
//   principalSubdivisionCode: string;
//   plusCode: string;
//   locality: string;
//   localityInfo: object;
// };

// 좌표값 받아서 해당 도시의 검색 코드 리턴하는 함수
const Geocoded = async (
  latitude: string,
  longitude: string,
): Promise<number> => {
  const reverseGeocoded = await axios.get(
    `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}`,
  );

  if (
    reverseGeocoded.data.localityInfo.administrative[1].name === "Gyeonggi-do"
  )
    return 1;
  if (reverseGeocoded.data.localityInfo.administrative[1].name === "Gangwon")
    return 2;
  if (
    reverseGeocoded.data.localityInfo.administrative[1].name ===
      "Chungcheongnam-do" ||
    reverseGeocoded.data.localityInfo.administrative[1].name ===
      "Chungcheongbuk-do"
  )
    return 3;
  if (
    reverseGeocoded.data.localityInfo.administrative[1].name ===
      "Jeollanam-do" ||
    reverseGeocoded.data.localityInfo.administrative[1].name === "Jeollabuk-do"
  )
    return 4;
  if (
    reverseGeocoded.data.localityInfo.administrative[1].name ===
      "Gyeongsangnam-do" &&
    reverseGeocoded.data.localityInfo.administrative[1].name ===
      "Gyeongsangbuk-do"
  )
    return 5;
  if (reverseGeocoded.data.localityInfo.administrative[1].name === "Jeju")
    return 6;

  return reverseGeocoded.data.localityInfo.administrative[1].name;
};

// 위치정보 저장하는 훅
const useGeolocation = () => {
  // 위치 정보 상태
  const [location, setLocation] = useState<Location>({
    isLoading: false,
    coordinate: { lat: 0, lng: 0 }, //좌표값
    cityCode: 0, // 지역 검색코드
  });

  // 성공하면 위치 정보 상태 저장
  const onSuccess = async (location: {
    coords: { latitude: number; longitude: number };
  }) => {
    await Geocoded(
      location.coords.latitude.toString(),
      location.coords.longitude.toString(),
    ).then((res) => {
      setLocation({
        isLoading: true,
        coordinate: {
          lat: location.coords.latitude,
          lng: location.coords.longitude,
        },
        cityCode: res,
      });
    });
  };

  // 에러(위치정보 동의 X -> 위치정보 없음)시 상태 저장
  const onError = (error: { code: number; message: string }) => {
    setLocation({
      isLoading: true,
      error,
      cityCode: 0,
    });
  };

  useEffect(() => {
    // 위치 정보 없으면
    if (!("geolocation" in navigator)) {
      onError({
        code: 0,
        message: "위치정보 없음",
      });
    }
    // 위치 정보 있으면
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  }, []);

  return location;
};

export default useGeolocation;
