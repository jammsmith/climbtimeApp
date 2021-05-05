// External imports
import React from 'react';

// Component Imports
import HRule from '../components/HRule';
import ScoreIcons from '../components/ScoreIcons/ScoreIcons';
import RankingTable, { Top10 } from '../components/RankingTable';

const CompOverview = () => {
	return (
		<>
			{/* <CompetitionCard />  ---->  In development, insert in place of h1 */}
			<h1>The Climbing Lab Ice Bloc</h1>
			<HRule />
			<ScoreIcons />

			<HRule />
			<h2>My Ranking</h2>
			<RankingTable />
			<HRule />
			<h2>Top 10</h2>
			<Top10 />
		</>
	);
};

export default CompOverview;
