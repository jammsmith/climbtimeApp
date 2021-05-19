import React, { useState } from 'react';

import {
	AddScoreContainer,
	RadioLabel,
	RadioInput,
	ChooseScoreGrid,
	ChooseScoreBtn,
} from './AddScoreElements';

const AddAttempt = (props) => {
	const [isClicked, setIsClicked] = useState(false);

	return (
		<AddScoreContainer>
			<RadioLabel>
				{props.radioText}
				<RadioInput id='climbCompleted' name='addAttempt' type='radio' />
			</RadioLabel>
			<ChooseScoreGrid>
				<ChooseScoreBtn
					name='attempt1'
					onClick={() => setIsClicked(true)}
					type='button'
					value={isClicked}>
					{props.button1}
				</ChooseScoreBtn>
				<ChooseScoreBtn
					name='attempt2'
					onClick={() => setIsClicked(true)}
					type='button'
					value={isClicked}>
					{props.button2}
				</ChooseScoreBtn>
				<ChooseScoreBtn
					name='attempt3'
					onClick={() => setIsClicked(true)}
					type='button'
					value={isClicked}>
					{props.button3}
				</ChooseScoreBtn>
				<ChooseScoreBtn
					name='attempt4'
					onClick={() => setIsClicked(true)}
					type='button'
					value={isClicked}>
					{props.button4}
				</ChooseScoreBtn>
			</ChooseScoreGrid>
		</AddScoreContainer>
	);
};

export default AddAttempt;
