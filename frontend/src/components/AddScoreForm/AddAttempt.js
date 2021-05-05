import React from 'react';

import {
	AddScoreContainer,
	RadioLabel,
	RadioInput,
	ChooseScoreGrid,
	ChooseScoreBtn,
} from './AddScoreElements';

const AddAttempt = (props) => {
	return (
		<AddScoreContainer>
			<RadioLabel>
				{props.radioText}
				<RadioInput id='climbCompleted' name='addAttempt' type='radio' />
			</RadioLabel>
			<ChooseScoreGrid>
				<ChooseScoreBtn name='attempt1' type='button'>
					<h3>{props.button1}</h3>
				</ChooseScoreBtn>
				<ChooseScoreBtn name='attempt2' type='button'>
					<h3>{props.button2}</h3>
				</ChooseScoreBtn>
				<ChooseScoreBtn name='attempt3' type='button'>
					<h3>{props.button3}</h3>
				</ChooseScoreBtn>
				<ChooseScoreBtn name='attempt4' type='button'>
					<h3>{props.button4}</h3>
				</ChooseScoreBtn>
			</ChooseScoreGrid>
		</AddScoreContainer>
	);
};

export default AddAttempt;
