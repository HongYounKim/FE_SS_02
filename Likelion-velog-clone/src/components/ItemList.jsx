import React from "react";
import styled from "styled-components";
import Item from "./Item";

function ItemList({ posts }) {
  return (
    <ItemListWrapper>
      <GridContainer>
        {Array.isArray(posts) && posts.length > 0 ? (
          posts.map((post) => <Item key={post.id} post={post} />)
        ) : (
          <p>게시글이 없습니다</p>
        )}
      </GridContainer>
    </ItemListWrapper>
  );
}

export default ItemList;

const ItemListWrapper = styled.main`
  display: flex;
  justify-content: flex-start;
  padding: 10px 88px;
`;

const GridContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 2rem;
  list-style: none;
  padding: 0;
  width: 100%;
  max-width: 1920px;

  @media (max-width: 1919px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 1440px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 1056px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
