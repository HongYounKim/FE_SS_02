import Title from "../../components/common/Title";
import Category from "./Category";
import styled from "styled-components";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const NewsList = () => {
  const [articles, setArticles] = useState([]);

  const fetchNews = async () => {
    try {
      const { VITE_APP_API_KEY2 } = import.meta.env;
      const response = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=us&apiKey=${VITE_APP_API_KEY2}`
      );
      setArticles(response.data.articles);
    } catch (error) {
      console.error("에러 내용:", error);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <>
      <Title title={"멋사 NEWS"} />
      <Category />
      <NewsContainer>
        {articles.map((item, index) => (
          <NewsItem key={index}>
            <img src={item.urlToImage} alt="뉴스 이미지" />
            <p>{item.title}</p>
          </NewsItem>
        ))}
      </NewsContainer>
    </>
  );
};

export default NewsList;

const NewsContainer = styled.article`
  display: flex;
  flex-direction: column;
  gap: 16px;
  background-color: black;
  color: white;
  margin: auto;
  width: 1200px;
`;

const NewsItem = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;

  img {
    width: 120px;
    height: 80px;
    object-fit: cover;
  }

  p {
    flex: 1;
  }
`;
