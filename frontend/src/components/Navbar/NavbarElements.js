import styled, { css } from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import colours from '../../colours';

const { yellow } = colours;

export const Nav = styled.nav`
	background: ${yellow};
	display: flex;
	justify-content: space-between;
	padding: 1rem calc((100vw - 1000px) / 2);
	z-index: 10;
`;

export const NavLink = styled(Link)`
  color: #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
  height: 100%
  margin-left: 1rem;
  padding: 0 1rem;
  text-decoration: none;

  ${(props) =>
		props.active &&
		css`
			color: ${'pink'};
		`}

`;

export const Bars = styled(FaBars)`
	color: #fff;
	cursor: pointer;
	font-size: 1.8rem;
	display: block;
	position: absolute;
	top: 0;
	right: 0;
	transform: translate(-100%, 40%);

	@media screen and (min-width: 1024px) {
		display: none;
	}
`;

export const NavMenu = styled.div`
	display: none;
	align-items: center;

	@media (min-width: 1024px) {
		display: flex;
	}
`;

export const NavBtn = styled.div`
	display: flex;
	align-items: center;

	@media screen and (max-width: 1024px) {
		display: none;
	}
`;

export const NavBtnLink = styled(Link)`
	border-radius: 5px;
	background: #256ce1;
	padding: 10px 22px;
	color: #fff;
	border: none;
	outline: none;
	cursor: pointer;
	transition: all 0.2s ease-in-out;
	text-decoration: none;

	&:hover {
		background: #fff;
		color: #010606;
		transition: all 0.2s ease-in-out;
	}
`;
