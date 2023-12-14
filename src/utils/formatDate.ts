const formatDate = (date: Date | null): string => {
  if (!date) return "";
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

const formatDateToYYMMDD = (date: Date | null): string => {
  if (!date) return "";
  const year = date.getFullYear().toString().slice(2); // 년도의 마지막 두 자리
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

const formatDateToYYYYMMDDHHMMSS = (date: string | null): string => {
  if (!date) return "";
  return date.slice(0, 16).replace("T", " ");
};

export { formatDate, formatDateToYYMMDD, formatDateToYYYYMMDDHHMMSS };
