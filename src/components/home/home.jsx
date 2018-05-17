import React from "react";

import Social from "../social";

import { HomeContainer, AboutContainer, Title, Role, Description } from "./home.styled";
import logo from "../../assets/logo.svg";

const Home = () => {
  return (
    <HomeContainer>
      <a href="/">
        <img src={logo} alt="logo" />
      </a>
      <AboutContainer>
        <Title>Ashish Gupta</Title>
        <Role>Front-end Engineer</Role>
        <Description>
          Passionate developer with love for well architected software and inspiring design. I am a
          college junior by day and a frontend ninja by night. I take things about javascript very
          seriously{" "}
          <span role="img" aria-label=":wave">
            👋
          </span>
        </Description>
        <Social />
      </AboutContainer>
    </HomeContainer>
  );
};

export default Home;
