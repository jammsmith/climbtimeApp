import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

import colours from '../../colours';

const { primaryAlt, secondary, light, dark } = colours;

export const CardContainer = styled.div`
  display: flex;
  flex-flow: wrap;
  gap: 0.5rem;
  margin: auto;
  max-width: 700px;
  justify-content: center;
`;

export const Card = styled.div`
  background: rgb(34, 193, 195);
  background: ${primaryAlt};
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  max-width: 325px;
  width: 100%;

  @media (min-width: 768px) {
  }
`;

export const CardContent = styled.div`
  align-items: space-evenly;
  display: flex;
  flex-direction: column;
  margin: 0.5rem;
`;

export const CardImage = styled.img`
  margin: auto;
  max-width: 200px;
`;

export const CardTitle = styled.h1`
  color: ${light};
`;

export const CardInfo = styled.h3`
  color: ${light};
  padding-top: 0.5rem;
`;

export const CardLinkContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CardLink = styled(Link)`
  background-color: ${dark};
  border-radius: 30px;
  color: ${light};
  font-size: 1.15rem;
  margin: 0.15rem auto;
  padding: 1rem;
  text-decoration: none;
  overflow: hidden;
  width: 90%;

  :active,
  :hover {
    background: ${secondary};
    color: ${light};
    transition: all 0.2s ease-in;
  }

  ${props =>
    props.primary &&
    css`
      background-color: ${light};
      color: ${dark};
    `};
`;
