import { useEffect, useState } from "react";
import { getPosts } from "../Api";
import Header from "../components/Header";
import ItemList from "../components/ItemList";
import Category from "../components/Category";

function HomePage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getPosts();
        console.log("데이터:", data);

        setPosts(data);
      } catch (err) {
        console.error("에러 내용:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Header />
      <Category />
      <ItemList posts={posts} />
    </>
  );
}

export default HomePage;
