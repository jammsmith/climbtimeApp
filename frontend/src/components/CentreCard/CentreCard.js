import React from 'react';

import {
	Card,
	CardLink,
	CardLinkContainer,
	CardImage,
	CardContent,
	CardTitle,
	CardInfo,
} from './CentreCardElements';

const CentreCard = (props) => {
	return (
		<Card id={props.id}>
			<CardImage src={props.image} alt={props.centreName}></CardImage>
			<CardContent>
				<CardTitle>{props.compName}</CardTitle>
				<CardInfo>{props.centreName}</CardInfo>
			</CardContent>
			<CardContent>
				<CardLinkContainer>
					<CardLink primary to={'competitions/' + props.id}>
						View Competition
					</CardLink>
					<CardLink to='register'>Register</CardLink>
				</CardLinkContainer>
			</CardContent>
		</Card>
	);
};

export default CentreCard;
