import styled from 'styled-components';

export const HeroContainer = styled.div`
  display: flex;
  height: 860px;
  width: 100%;
  background-image: linear-gradient(
    to right top,
    #fff7e6 10%,
    white 60%,
    #ffcccc
  );
`;

export const HeroLeft = styled.div`
  flex: 0.5;
  position: relative;
`;

export const HeroLeftWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding-left: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 212px;
`;

export const HeroTitle = styled.h1`
  font-size: 73px;
  font-family: "Poppins", sans-serif;
`;

export const HeroDes = styled.p`
  font-size: 30px;
  opacity: 60%;
  font-family: "Poppins", sans-serif;
`;

export const Arrow = styled.img`
    width: 60%;
`
export const ButtonWrapper = styled.div`
  flex-direction: row;
  margin-top: 40px;
`;

export const ButtonLeft = styled.button`
  border-radius: 45px;
  border: none;
  width: 220px;
  height: 69px; // Nice
  background-color: red;
  font-size: 24px;
  color: white;
  margin-right: 40px;
  
`;

export const ButtonRight = styled.button`
  border-radius: 45px;
  width: 220px;
  height: 69px; // Nice
  font-size: 24px;
  background-color: transparent;
`;

export const HeroRight = styled.div`
  flex: 0.5;
  overflow: hidden;
`;

export const Image = styled.img`
  height: 860px;
`;