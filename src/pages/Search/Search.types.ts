export interface SearchType {
  region: number | null;
  type: number | null;
  category_parking: boolean;
  category_cooking: boolean;
  category_pickup: boolean;
}

export interface RegionItemProps {
  selected: boolean;
}

export interface TypeItemProps {
  selected: boolean;
  isFullWidth?: boolean;
}

export interface OptionItemProps {
  selected: boolean;
}
