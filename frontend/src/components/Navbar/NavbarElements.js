import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

import colours from '../../colours';

const { light, dark } = colours;

export const NavbarContainer = styled.header`
	background: rgba(255, 190, 15, 1);
	width: 100%;
	height: 60px;
`;

export const NavbarNavigation = styled.nav`
	display: flex;
	align-items: center;
	height: 100%;
	padding: 0 1rem;
`;

export const NavbarHomeLink = styled(Link)`
	color: ${light};
`;

export const NavbarSpacer = styled.div`
	flex: 1;
`;

export const NavbarLinksContainer = styled.div`
	display: none;

	@media (min-width: 768px) {
		display: block;
	}
`;

export const NavbarLinkList = styled.ul`
	display: flex;
	list-style: none;
	margin: 0;
	padding: 0;
`;

export const NavbarLinkItem = styled.li`
	padding: 0.75rem;
`;

export const NavbarLink = styled(Link)`
	color: ${light};
	text-decoration: none;

	:active,
	:hover {
		color: ${dark};
	}
`;

export const NavbarToggleIcon = styled(FaBars)`
	color: ${light};
	display: block;

	@media (min-width: 768px) {
		display: none;
	}
`;
