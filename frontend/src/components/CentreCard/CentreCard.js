import React from 'react';

import {
	Card,
	CardLink,
	CardImage,
	CardContent,
	CardTitle,
	CardInfo,
	ButtonContainer,
} from './CardElements';

const CentreCard = (props) => {
	return (
		<Card id={props.id}>
			<CardImage src={props.image} alt={props.centreName}></CardImage>
			<CardContent>
				<CardTitle>{props.compName}</CardTitle>
				<CardInfo>{props.centreName}</CardInfo>
			</CardContent>
			<CardContent>
				<ButtonContainer>
					<CardLink to='comp-overview'>View Competition</CardLink>
					<CardLink to='register'>Sign Up</CardLink>
				</ButtonContainer>
			</CardContent>
		</Card>
	);
};

export default CentreCard;
