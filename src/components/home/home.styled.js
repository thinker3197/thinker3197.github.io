import styled from "styled-components";

import homeBg from "../../assets/homeBg.png";

export const HomeContainer = styled.div`
  padding: 2rem;
  width: 50%;
  height: 100%;
  background: url(${homeBg});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: space-between;
`;

export const AboutContainer = styled.div`
  margin: 4rem;
  max-width: 420px;
`;

export const Title = styled.h1`
  font-family: Avenir, serif;
  font-weight: 900;
  font-size: 64px;
  color: #ffffff;
  margin: 1rem 0;
`;

export const Role = styled.span`
  color: #7684ff;
  font-weight: 600;
  font-size: 18px;
  font-family: Avenir, sans-serif;
`;

export const Description = styled.p`
  margin: 1rem 0;
  font-family: "Crimson Text", serif;
  color: #ffffff;
  font-size: 20px;
  opacity: 0.85;
  line-height: 2rem;
`;
