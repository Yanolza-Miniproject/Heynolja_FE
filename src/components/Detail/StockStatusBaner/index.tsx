import { Banner } from "./StockStatusBanner.styles";

interface StockStatusBannerProps {
  inventory: number;
}

const StockStatusBanner: React.FC<StockStatusBannerProps> = ({ inventory }) => {
  const lowStockThreshold = 5;

  if (inventory <= 0) {
    return <Banner outOfStock>품절</Banner>;
  } else if (inventory <= lowStockThreshold) {
    return <Banner lowStock>품절 임박</Banner>;
  } else {
    return null;
  }
};

export default StockStatusBanner;
