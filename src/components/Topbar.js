import React from 'react'
import {
  TopbarContainer,
  TopbarWrapper,
  TopbarLogo,
  TopbarLeft,
  TopbarRight,
  HomeText,
  TopbarText,
} from "./Topbar.style";
import logo from "../Img/Logo.svg"

export default function Topbar() {
    return (
      <TopbarContainer>
        <TopbarWrapper>
          <TopbarLeft>
            <TopbarLogo src={logo} />
          </TopbarLeft>
          <TopbarRight>
            <HomeText>Home</HomeText>
            <TopbarText>Portfolio</TopbarText>
            <TopbarText>About</TopbarText>
            <TopbarText>Contact Us</TopbarText>
          </TopbarRight>
        </TopbarWrapper>
      </TopbarContainer>
    );
}
