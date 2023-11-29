export type listType = {
  label: string;
  value: number;
};

export type CategoryFilterPopUpProps = {
  buttonText: string;
  listData: listType[];
};

export type CategoryQueryType = {
  region_name: string;
  region: number;
  type_name: string;
  type: number;
};
