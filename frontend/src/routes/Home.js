import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { CardContainer } from '../components/CentreCard/CardElements';
import CentreCard from '../components/CentreCard/CentreCard';

const Home = () => {
	const [competitions, setCompetitions] = useState([]);

	useEffect(() => {
		axios
			.get('/api/competitions')
			.then((response) => setCompetitions(response.data))
			.catch((err) => console.log(err, err.response));
	}, []);

	return (
		<CardContainer>
			{competitions.map((comp) => {
				return (
					<CentreCard
						key={comp._id}
						id={comp._id}
						image={comp.centreLogo}
						centreName={comp.centreName}
						compName={comp.compName}
					/>
				);
			})}
		</CardContainer>
	);
};

export default Home;
