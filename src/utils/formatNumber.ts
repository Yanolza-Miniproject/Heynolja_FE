const formatNumber = (number: number) => {
  const formattedNumber = number
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return formattedNumber;
};

export default formatNumber;
