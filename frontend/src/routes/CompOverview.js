// External imports
import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Component Imports
import HRule from '../components/HRule';
import ScoreIcons from '../components/ScoreIcons/ScoreIcons';
import RankingTable, { Top10 } from '../components/RankingTable';

const CompOverview = (props) => {
	const [compInfo, setCompInfo] = useState({});

	useEffect(() => {
		axios
			.get(`/api/competitions/${props.match.params.id}`)
			.then((response) => setCompInfo(response.data))
			.catch((err) => console.log(err, err.response));
	});

	return (
		<>
			<h1>{compInfo.compName}</h1>
			<h3>{compInfo.centreName}</h3>
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
