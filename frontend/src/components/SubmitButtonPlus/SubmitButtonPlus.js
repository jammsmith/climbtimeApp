import React from 'react';

import {
	SubmitBtn,
	SubmitBtnSmall,
	SubmitBtnIcon,
} from './SubmitButtonPlusElements';

const SubmitButtonPlus = (props) => {
	return props.small ? (
		<SubmitBtnSmall>
			<SubmitBtnIcon size={20} />
		</SubmitBtnSmall>
	) : (
		<SubmitBtn>
			<SubmitBtnIcon size={30} />
		</SubmitBtn>
	);
};

export default SubmitButtonPlus;
