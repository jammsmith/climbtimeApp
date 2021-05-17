import styled from 'styled-components';
import colours from '../../colours';

const { primary, dark } = colours;

export const TableContainer = styled.div`
	display: flex;
	justify-content: center;
`;

export const Table = styled.table`
	color: ${dark};
`;

export const MyRank = styled.tr`
	color: ${primary};
	font-size: 1.25rem;
`;
