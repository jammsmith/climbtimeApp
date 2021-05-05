import React from 'react';
import SubmitButtonPlus from '../SubmitButtonPlus';
import { IconBanner, Icon, IconContent, IconLabel } from './IconElements';

import { Link } from 'react-router-dom';

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
			<Link style={{ textDecoration: 'none' }} to='log-attempt'>
				<AddScoreIcon iconLabel='Add To Score!' />
			</Link>
		</IconBanner>
	);
};

export default ScoreIcons;
