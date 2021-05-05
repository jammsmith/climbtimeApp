import styled from 'styled-components';
import colours from '../colours';

const { grey } = colours;

const HRule = styled.hr`
	border-radius: 5px;
	border-width: 2px 0 0 0;
	color: ${grey};
	margin: 1rem 0;
	width: 100vw;
`;

export default HRule;
