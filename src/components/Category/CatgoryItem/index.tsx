import { useInView } from "framer-motion";
import HeartClick from "../HeartClick";
import * as Styled from "./CategoryItem.styles";
import Empty from "../../../assets/image/empty.png";

import * as _ from "lodash";
import { useRef } from "react";
import { random } from "lodash";
import { useNavigate } from "react-router-dom";
import { CategoryItemProps } from "./CategoryItem.types";
import { categoryViewAtom } from "../../../store/categoryViewAtom";
import { useRecoilValue } from "recoil";

const CategoryItem = ({ data }: CategoryItemProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const router = useNavigate();
  const categoryViewState = useRecoilValue(categoryViewAtom);

  const handleClick: React.MouseEventHandler<HTMLDivElement> = (e) => {
    e.preventDefault();
    e.stopPropagation();

    router(`/detailList?accommodation-id=${data.id}`);
  };

  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = Empty;
  };

  return (
    <Styled.CategoryItemContainer ref={ref} view={categoryViewState}>
      <Styled.CategoryItemWrapper
        view={categoryViewState}
        id="itemTest"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{
          duration: random(0.7, 1.7),
          delay: 0.2,
          ease: "easeInOut",
        }}
      >
        <div>
          <Styled.CategoryImage
            view={categoryViewState}
            src={data.thumbnailUrl}
            alt={data.name}
            onClick={handleClick}
            onError={handleError}
            data-testid="individual-item"
          />
        </div>
        <Styled.CategoryTextWrapper view={categoryViewState}>
          <Styled.CategoryName view={categoryViewState}>
            {_.truncate(data.name, { length: categoryViewAtom ? 50 : 20 })}
          </Styled.CategoryName>
          <Styled.CategoryTopWrapper>
            {!categoryViewState && (
              <Styled.CategoryDescription>
                {_.truncate(data.infoDetail, {
                  length: 40,
                })}
              </Styled.CategoryDescription>
            )}
            <Styled.CategoryView view={categoryViewState}>
              조회수 : {data.viewCount}
            </Styled.CategoryView>
          </Styled.CategoryTopWrapper>
          <Styled.CategoryDownWrapper view={categoryViewState}>
            <Styled.CategoryPrice>
              ￦{data.lowest_price}원 부터
            </Styled.CategoryPrice>
            <HeartClick
              likes={data.wishCount}
              likes_clicked={data.isWish}
              accommodationId={data.id}
            />
          </Styled.CategoryDownWrapper>
        </Styled.CategoryTextWrapper>
      </Styled.CategoryItemWrapper>
    </Styled.CategoryItemContainer>
  );
};

export default CategoryItem;
