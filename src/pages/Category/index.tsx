import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const fetchCatgory = async () => {
  const data = await axios.get("/api/v1/listitems?page=3");
  return data.data;
};

type CategoryProps = {
  accommodation_id: string;
  address: string;
  likes: number;
  likes_available: boolean;
  name: string;
  phone_number: string;
  price: number;
  room_counts: number;
  view: number;
  picture: string;
};

const Category = () => {
  const { data } = useQuery({
    queryKey: ["category"],
    queryFn: fetchCatgory,
  });

  return (
    <div>
      {data &&
        data.map((item: CategoryProps) => {
          return <div key={item.name}>{item.name}</div>;
        })}
    </div>
  );
};

export default Category;
