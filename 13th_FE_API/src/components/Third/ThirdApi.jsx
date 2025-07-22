import { useState } from "react";
import axios from "axios";
import { BtnWrapper, BtnContainer } from "../First/Styled";
import { useEffect } from "react";

const ThirdApi = () => {
  const { VITE_APP_API_KEY2 } = import.meta.env;
  const [content, setContent] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=us&apiKey=${VITE_APP_API_KEY2}`
      );

      console.log(response);
      setContent(response.data);
    } catch (error) {
      console.error("에러 내용:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  //state 작성

  //OPEN API 비동기로 불러와 state에 저장 및 불러오기
  //이때의 url은 https://newsapi.org/v2/top-headlines?country=kr&apiKey=${import.meta.env.VITE_NEWS_API_KEY}

  return (
    <>
      <BtnWrapper>
        <BtnContainer onClick={fetchData}>
          데이터 GET해보기! <br />
        </BtnContainer>
      </BtnWrapper>
    </>
  );
};

export default ThirdApi;
