import React from 'react';
import styled from 'styled-components';
import colours from '../colours';

const { grey, yellow } = colours;

const TableContainer = styled.div`
	display: flex;
	justify-content: center;
`;

const Table = styled.table`
	color: ${grey};
`;

const MyRank = styled.tr`
	color: ${yellow};
	font-size: 1.25rem;
`;

const RankingTable = () => {
	return (
		<TableContainer>
			<Table>
				<tr>
					<th>Position</th>
					<th>Name</th>
					<th>Total Points</th>
				</tr>
				<tr>
					<td>12</td>
					<td>Jack Bauer</td>
					<td>932</td>
				</tr>
				<tr>
					<td>13</td>
					<td>Ainsley Harriet</td>
					<td>684</td>
				</tr>
				<MyRank>
					<td>14</td>
					<td>Therersa May</td>
					<td>43</td>
				</MyRank>
				<tr>
					<td>15</td>
					<td>Ashley Andaman</td>
					<td>2</td>
				</tr>
				<tr>
					<td>16</td>
					<td>John Wayne</td>
					<td>1</td>
				</tr>
			</Table>
		</TableContainer>
	);
};

const Top10 = () => {
	return (
		<TableContainer>
			<Table>
				<th>Position</th>
				<th>Name</th>
				<th>Total Points</th>
				<tr>
					<td>1</td>
					<td>Jack Bauer</td>
					<td>932</td>
				</tr>
				<tr>
					<td>2</td>
					<td>Ainsley Harriet</td>
					<td>684</td>
				</tr>
				<tr>
					<td>3</td>
					<td>Therersa May</td>
					<td>43</td>
				</tr>
				<tr>
					<td>4</td>
					<td>Ashley Andaman</td>
					<td>2</td>
				</tr>
				<tr>
					<td>5</td>
					<td>John Wayne</td>
					<td>1</td>
				</tr>
				<tr>
					<td>6</td>
					<td>Jack Bauer</td>
					<td>932</td>
				</tr>
				<tr>
					<td>7</td>
					<td>Ainsley Harriet</td>
					<td>684</td>
				</tr>
				<tr>
					<td>8</td>
					<td>Therersa May</td>
					<td>43</td>
				</tr>
				<tr>
					<td>9</td>
					<td>Ashley Andaman</td>
					<td>2</td>
				</tr>
				<tr>
					<td>10</td>
					<td>John Wayne</td>
					<td>1</td>
				</tr>
			</Table>
		</TableContainer>
	);
};

export default RankingTable;
export { Top10 };
