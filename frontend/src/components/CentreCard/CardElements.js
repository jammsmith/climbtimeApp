import styled from 'styled-components';
import colours from '../../colours';
import Link from '../Link';

const { grey, yellow } = colours;

export const CardContainer = styled.div`
	display: flex;
	flex-flow: wrap;
	justify-content: center;
	margin: 0.5rem;
`;

export const Card = styled.div`
	background: rgb(34, 193, 195);
	background: linear-gradient(20deg, ${yellow} 0%, #fff 100%);
	border: 2px solid ${yellow};
	border-radius: 15px;
	display: flex;
	flex-direction: column;
	margin: 0.25rem auto 0.5rem;
	padding: 1rem;
	width: 90%;
	max-width: 400px;
`;

export const CardContent = styled.div`
	align-items: space-evenly;
	display: flex;
	flex-direction: column;
	margin: 0.5rem;
`;

export const CardImage = styled.img`
	margin: auto;
	max-width: 300px;
`;

export const CardTitle = styled.h1`
	color: #fff;
`;

export const CardInfo = styled.h2`
	color: ${grey};
`;

export const CardLink = styled(Link)`
	border-radius: 30px;
	padding: 1rem;
	margin: 0.15rem auto;
	width: 90%;
`;

export const ButtonContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	margin: 1rem;
`;
