import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { getPostById } from "../Api";
import { FaHeart, FaShareAlt } from "react-icons/fa";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
`;

const FixedSidebar = styled.div`
  position: fixed;
  top: 270px;
  left: calc(50% - 500px);
  display: flex;
  flex-direction: column;
  gap: 15ㄴpx;
  align-items: center;
  background: #fffefe;
  border-radius: 999px;
  padding: 6px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const IconButton = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: white;
  color: #666;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const LikeCount = styled.div`
  font-size: 0.9rem;
  font-weight: bold;
  color: #555;
  margin-bottom: 10px;
`;

const DetailWrapper = styled.div`
  max-width: 768px;
  margin: 0 auto;
  padding: 40px 20px;
`;

const Title = styled.h1`
  line-height: 1.5;
  font-size: 2.2rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const WriterRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

const WriterLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #666;
  font-size: 0.9rem;
`;

const Profile = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  object-fit: cover;
`;

const WriterName = styled.span`
  font-weight: 500;
`;

const Dot = styled.span`
  margin: 0 4px;
`;

const Date = styled.span`
  color: #999;
`;

const FollowButton = styled.button`
  background: transparent;
  border: 1px solid #00b894;
  color: #00b894;
  padding: 6px 14px;
  font-size: 0.85rem;
  border-radius: 16px;
`;

const Thumbnail = styled.img`
  width: 100%;
  margin: 20px 0;
`;

const Content = styled.div`
  font-size: 1rem;
  line-height: 1.8;
  color: #333;
  margin-top: 20px;
`;

export default function DetailPage() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPostById(id);
      console.log("데이터:", data);
      setPost(data);
    };
    fetchData();
  }, [id]);

  if (!post) return <p>로딩 중입니다.</p>;

  return (
    <Wrapper>
      <FixedSidebar>
        <IconButton>
          <FaHeart />
        </IconButton>

        <LikeCount>{post.heartCount}</LikeCount>

        <IconButton>
          <FaShareAlt size={18} />
        </IconButton>
      </FixedSidebar>

      <DetailWrapper>
        <Title>{post.title}</Title>

        <WriterRow>
          <WriterLeft>
            <Profile src={post.writerProfileUrl} alt={post.writerName} />
            <WriterName>{post.writerName}</WriterName>
            <Dot>·</Dot>
            <Date>{post.createdAt}</Date>
          </WriterLeft>
          <FollowButton>팔로우</FollowButton>
        </WriterRow>

        <Thumbnail src={post.thumbnailUrl} />

        <Content dangerouslySetInnerHTML={{ __html: post.content }} />
      </DetailWrapper>
    </Wrapper>
  );
}
