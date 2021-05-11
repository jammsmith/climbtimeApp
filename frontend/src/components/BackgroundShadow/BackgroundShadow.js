import React from 'react';

import './BackgroundShadow.css';

const BackgroundShadow = (props) => {
	return (
		<div className='background-shadow' onClick={props.backgroundClicked} />
	);
};

export default BackgroundShadow;
