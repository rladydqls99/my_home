import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { getEnglishGretting } from "../../apis/english";
import { setIndex } from "../../utils/setIndex";
import styled from "styled-components";

function Main() {
  const [indexState, setIndexState] = useState();
  const [isHovered, setIsHoverd] = useState(false);
  const { data, isLoading } = useQuery(["today"], getEnglishGretting);

  useEffect(() => {
    setIndex(setIndexState);
    // window.localStorage.clear();
  }, [data]);

  useEffect(() => {}, [data]);
  const handleHover = () => {
    setIsHoverd(!isHovered);
  };
  console.log(indexState, "das");
  console.log(data, "asd");
  if (!data || !data[indexState]) {
    console.error("Data structure is not as expected");
    return <MainBox>Error: Data structure is not as expected</MainBox>;
  }

  return (
    <Container>
      <MainBox onMouseEnter={handleHover} onMouseLeave={handleHover}>
        {isLoading ? (
          <p>isLoading...</p>
        ) : isHovered ? (
          data[indexState].korea
        ) : (
          data[indexState].english
        )}
      </MainBox>
      <HyperLinkBox>
        <a href="https://www.google.co.kr">
          <Img src="https://ifh.cc/g/XO3jg3.png" alt="logo" />
        </a>
        <a href="https://www.naver.com">
          <Img src="https://ifh.cc/g/GN6jH3.png" alt="logo" />
        </a>
      </HyperLinkBox>
    </Container>
  );
}

export default Main;

const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-image: url("https://ifh.cc/g/szRrK3.gif");
  background-size: 100% 100%;
`;

const MainBox = styled.div`
  background-color: rgba(253, 244, 244, 0.8);
  border-radius: 20px;

  height: 50px;
  min-width: 700px;
  padding: 0px 20px;

  font-size: 35px;
  color: rgba(0, 0, 0, 0.8);

  display: flex;
  align-items: center;
  justify-content: center;
`;

const HyperLinkBox = styled.div`
  margin-top: 10px;

  display: flex;
  gap: 10px;
`;

const Img = styled.img`
  width: 40px;
  height: 40px;

  border-radius: 100%;

  cursor: pointer;
`;
