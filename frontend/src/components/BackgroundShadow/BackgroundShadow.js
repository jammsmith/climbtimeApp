import React from 'react';

import { Shadow } from './BackgroundShadowElements';

const BackgroundShadow = (props) => {
	return <Shadow onClick={props.backgroundClicked} />;
};

export default BackgroundShadow;
