import { useEffect, useState } from "react";

interface Location {
  isLoading: boolean;
  coordinate?: { lat: number; lng: number };
  error?: { code: number; message: string };
  city: number;
}

import axios from "axios";

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

const Geocoded = async (
  latitude: string,
  longitude: string,
): Promise<number> => {
  const reverseGeocoded = await axios.get(
    `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=kr`,
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

  return 0;
};

const useGeolocation = () => {
  const [location, setLocation] = useState<Location>({
    isLoading: false,
    coordinate: { lat: 0, lng: 0 },
    city: 0,
  });

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
        city: res,
      });
    });
  };

  const onError = (error: { code: number; message: string }) => {
    setLocation({
      isLoading: true,
      error,
      city: 0,
    });
  };

  useEffect(() => {
    if (!("geolocation" in navigator)) {
      onError({
        code: 0,
        message: "위치정보 없음",
      });
    }
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  }, []);

  return location;
};

export default useGeolocation;
