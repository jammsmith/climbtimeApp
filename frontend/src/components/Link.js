import styled, { css } from 'styled-components';
import colours from '../colours';
import { Link as LinkTo } from 'react-router-dom';

const { yellow, yellowFade, white } = colours;

const Link = styled(LinkTo)`
	background-color: ${white};
	border: 0.2rem solid ${yellow};
	border-radius: 5px;
	color: ${yellow};
	text-decoration: none;
	overflow: hidden;
	width: 10rem;

	${(props) =>
		props.primary &&
		css`
			background-color: ${yellow};
			box-shadow: 2px 2px ${yellowFade};
			color: ${white};
		`};
`;

export default Link;
