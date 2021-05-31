import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const DrawerNav = styled.nav`
  background: #fff;
  box-shadow: 2px 0px 7px rgba(0, 0, 0, 0.6);
  display: fixed;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  width: 65%;
  z-index: 100;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const DrawerItems = styled.ul`
  display: flex;
  height: 40%;
  flex-direction: column;
  justify-content: space-around;
  list-style: none;
  padding: 0 1rem;
  margin: 0;
`;

export const LinkItem = styled.li`
  color: rgba(255, 190, 15, 1);
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
`;

export const DrawerLink = styled(Link)`
  color: rgba(255, 190, 15, 1);
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
`;

export const Divider = styled.hr`
  border: none;
  border-top: 1px solid grey;
`;
