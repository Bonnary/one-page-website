import React from "react";
import {
  HeroContainer,
  HeroLeft,
  HeroLeftWrapper,
  HeroTitle,
  HeroDes,
  Arrow,
  ButtonWrapper,
  ButtonLeft,
  ButtonRight,
  HeroRight,
  Image
} from "./Hero.style";
import arrow from "../Img/arrow.svg";
import girl from "../Img/Girl.png"
export default function Hero() {
  return (
    <HeroContainer>
      <HeroLeft>
        <HeroLeftWrapper>
          <HeroTitle>We Design Amazing Experience For You</HeroTitle>
          <HeroDes>
            Template is a Professional Webflow <br/> template with multiple
            sections.
          </HeroDes>
          <Arrow src={arrow} />
          <ButtonWrapper>
            <ButtonLeft>Get Started</ButtonLeft>
            <ButtonRight>Learn more</ButtonRight>
          </ButtonWrapper>
        </HeroLeftWrapper>
      </HeroLeft>
      <HeroRight>
        <Image src={girl} />
      </HeroRight>
    </HeroContainer>
  );
}
