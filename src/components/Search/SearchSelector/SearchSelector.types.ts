export interface SearchType {
  region: number | null;
  type: number | null;
  categoryParking: boolean;
  categoryCooking: boolean;
  categoryPickup: boolean;
}

export interface TypeImages {
  [key: number]: string;
}

export interface OptionImages {
  [key: number]: string;
}

export interface RegionItemProps {
  selected: boolean;
}

export interface TypeItemProps {
  selected: boolean;
  isFullWidth?: boolean;
}

export interface TypeWrapperProps {
  isType?: boolean;
  isRegionHovered?: boolean;
}

export interface OptionItemProps {
  selected: boolean;
}

export interface QueryParams {
  [key: string]: string;
}

export type SearchStateUpdates = Partial<{
  selectedRegion: number;
  selectedType: number;
  selectedOptions: number[];
  isRegionSelected: boolean;
  isRegionHovered: boolean;
  isTypeSelected: boolean;
  isTypeHovered: boolean;
  isOptionsSelected: boolean;
  isOptionsHovered: boolean;
}>;
