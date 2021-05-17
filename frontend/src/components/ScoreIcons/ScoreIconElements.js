import styled from 'styled-components';
import { Link } from 'react-router-dom';

import colours from '../../colours';

const { secondary, dark } = colours;

export const IconBanner = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
`;

export const Icon = styled.div`
	border-radius: 5px;
	display: flex;
	align-items: center;
	justify-content: center;
	height: 20vw;
	margin: 0.5rem 1rem;
	max-height: 8rem;
	max-width: 8rem;
	overflow: hidden;
	width: 20vw;
`;

export const IconContent = styled.h1`
	color: ${secondary};
	font-weight: bold;
`;

export const IconLabel = styled.label`
	color: ${dark};
	align-self: flex-end;
	font-size: 0.8rem;
	text-decoration: none;
`;

export const IconLink = styled(Link)`
	text-decoration: none;
`;
