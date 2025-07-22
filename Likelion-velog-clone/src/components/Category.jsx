import React, { useState } from "react";
import styled from "styled-components";
import { FaClock, FaRss } from "react-icons/fa";
import { FaArrowTrendUp } from "react-icons/fa6";
import { FiMoreVertical } from "react-icons/fi";

const Wrapper = styled.div`
  display: flex;
  gap: 24px;
  padding: 16px 24px;
  align-items: center;
`;

const Tab = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  border: none;
  background: none;
  cursor: pointer;
  font-weight: ${({ active }) => (active ? "bold" : "normal")};
  color: ${({ active }) => (active ? "#1e1e1e" : "#888")};

  padding-bottom: 8px;
  border-bottom: ${({ active }) =>
    active ? "2px solid #1e1e1e" : "2px solid transparent"};
`;

const RightSection = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: 12px;
  color: #888;
`;

const Select = styled.select`
  background-color: white;
  border: none;
  border-radius: 12px;
  padding: 8px 32px 8px 12px;
  font-size: 14px;
  font-weight: 500;
  color: #333;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  padding-right: 32px;
`;

const MoreIcon = styled(FiMoreVertical)`
  font-size: 18px;
  cursor: pointer;
`;

const Category = () => {
  const [active, setActive] = useState("트렌딩");
  const tabs = [
    { name: "트렌딩", icon: <FaArrowTrendUp /> },
    { name: "최신", icon: <FaClock /> },
    { name: "피드", icon: <FaRss /> },
  ];

  return (
    <Wrapper>
      {tabs.map((tab) => (
        <Tab
          key={tab.name}
          active={active === tab.name}
          onClick={() => setActive(tab.name)}
        >
          {tab.icon}
          {tab.name}
        </Tab>
      ))}
      <RightSection>
        <form>
          <Select>
            <option>이번 달</option>
            <option>이번 주</option>
            <option>전체</option>
          </Select>
        </form>
        <MoreIcon />
      </RightSection>
    </Wrapper>
  );
};

export default Category;
