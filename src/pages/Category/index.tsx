import axios from "axios";
import * as Styled from "./Category.styles";
import { useQuery } from "@tanstack/react-query";
import { CategoryProps } from "./Category.types";
import CategoryItem from "../../components/Category/CatgoryItem";

const fetchCatgory = async () => {
  const data = await axios.get("/api/v1/accommodations?page=2");
  return data.data;
};

const Category = () => {
  const { data } = useQuery({
    queryKey: ["category"],
    queryFn: fetchCatgory,
  });

  return (
    <Styled.CategoryContainer>
      <Styled.ItemWrapper>
        {data &&
          data.data.map((item: CategoryProps) => {
            return <CategoryItem key={item.name} data={item} />;
          })}
      </Styled.ItemWrapper>
    </Styled.CategoryContainer>
  );
};

export default Category;
