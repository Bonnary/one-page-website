import styled from "styled-components";

export const TopbarContainer = styled.div`
  width: 100%;
  height: 70px;
  background-color: transparent;
  position: fixed;
  top: 0;
`;

export const TopbarWrapper = styled.div`
  padding: 10px 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TopbarLogo = styled.img`
  height: 60px;
  margin-right: 40px;
  margin-left: 212px;
`;

export const TopbarLeft = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
`;

export const TopbarRight = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
`;

export const HomeText = styled.h2`
  font-size: 18px;
  display: flex;
  margin-left: 90px;
  font-family: "Poppins", sans-serif;
  color: #ff0000;
  cursor: pointer;
`;

export const TopbarText = styled.h2`
  font-size: 18px;
  display: flex;
  margin-left: 90px;
  font-family: "Poppins", sans-serif;
  cursor: pointer;

  &:hover {
    color: #ff0000;
  }
`;