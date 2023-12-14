import { Banner } from "./StockStatusBanner.styles";

interface StockStatusBannerProps {
  inventory: number;
}

const StockStatusBanner: React.FC<StockStatusBannerProps> = ({ inventory }) => {
  const lowStockThreshold = 5;

  if (inventory <= 0) {
    return <Banner outOfStock>품절</Banner>;
  }

  if (inventory <= lowStockThreshold) {
    return <Banner lowStock>품절 임박</Banner>;
  }

  return null;
};

export default StockStatusBanner;
