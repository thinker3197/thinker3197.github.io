import styled from "styled-components";

export const SocialList = styled.ul`
  margin-top: 2.4rem;
`;

export const SocialListItem = styled.li`
  display: inline;
  margin-right: 2rem;
`;

export const Icon = styled.svg`
  cursor: pointer;

  > path {
    transition: all 0.3s ease;
  }

  &:hover > path {
    fill-opacity: 1;
    stroke-opacity: 1;
  }
`;
