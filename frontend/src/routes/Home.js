import React from 'react';

import competitions from '../competitions';
import { CardContainer } from '../components/CentreCard/CardElements';
import CentreCard from '../components/CentreCard/CentreCard';

const Home = () => {
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
