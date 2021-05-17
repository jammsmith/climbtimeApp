import React from 'react';
import SubmitButtonPlus from '../SubmitButtonPlus/SubmitButtonPlus';
import {
	IconBanner,
	Icon,
	IconContent,
	IconLabel,
	IconLink,
} from './ScoreIconElements';

const ScoreIcon = (props) => {
	return (
		<IconLabel>
			<Icon>
				<IconContent>{props.iconContent}</IconContent>
			</Icon>
			{props.iconLabel}
		</IconLabel>
	);
};

const AddScoreIcon = (props) => {
	return (
		<IconLabel>
			<Icon>
				<SubmitButtonPlus small />
			</Icon>

			{props.iconLabel}
		</IconLabel>
	);
};

const ScoreIcons = () => {
	return (
		<IconBanner>
			<ScoreIcon iconContent='96' iconLabel='Your Score' />
			<ScoreIcon iconContent='5th' iconLabel='Your Position' />
			<IconLink to='../log-attempt'>
				<AddScoreIcon iconLabel='Add To Score!' />
			</IconLink>
		</IconBanner>
	);
};

export default ScoreIcons;
