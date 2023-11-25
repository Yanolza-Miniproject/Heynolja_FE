import React from "react";
import { Banner } from "./StockStatusBanner.styles";

const StockStatusBanner: React.FC = () => {
  const quantity = 3; // 임시 값

  const lowStockThreshold = 5; // 임시 값

  if (quantity <= 0) {
    return <Banner outOfStock>품절</Banner>;
  } else if (quantity > 0 && quantity <= lowStockThreshold) {
    return <Banner lowStock>품절 임박</Banner>;
  } else {
    return null;
  }
};
export default StockStatusBanner;
