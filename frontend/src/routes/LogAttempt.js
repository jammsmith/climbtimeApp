import React from 'react';
import {
	InputScoresForm,
	ClimbNumInput,
} from '../components/AddScoreForm/AddScoreElements';
import AddAttempt from '../components/AddScoreForm/AddAttempt';
import SubmitButtonPlus from '../components/SubmitButtonPlus/SubmitButtonPlus';

const LogAttempt = () => {
	return (
		<InputScoresForm>
			<ClimbNumInput />
			<AddAttempt
				button1='Flash!'
				button2='2nd Go'
				button3='3rd Go'
				button4='4+ Goes'
				radioText='Climb Completed!'
			/>
			<hr />
			<AddAttempt
				button1='1'
				button2='2'
				button3='3'
				button4='4+'
				radioText='Just Logging Some Attempts'
			/>
			<hr />
			<SubmitButtonPlus size='30' />
		</InputScoresForm>
	);
};

export default LogAttempt;
