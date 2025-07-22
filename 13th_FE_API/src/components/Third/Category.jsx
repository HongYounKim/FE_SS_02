import React from "react";
import styled from "styled-components";

const CategoryWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 30px 0;
`;

const CategoryBox = styled.div`
  display: flex;
  gap: 24px;
  border: 1px solid white;
  padding: 12px 24px;
  width: 1200px;
`;

const CategoryText = styled.span`
  color: white;
  font-size: 14px;
  cursor: default;
`;

const Category = () => {
  return (
    <CategoryWrapper>
      <CategoryBox>
        <CategoryText>전체</CategoryText>
        <CategoryText>스포츠</CategoryText>
        <CategoryText>연애</CategoryText>
        <CategoryText>경제</CategoryText>
      </CategoryBox>
    </CategoryWrapper>
  );
};

export default Category;
