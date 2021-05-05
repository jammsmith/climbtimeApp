import React from 'react';
import styled from 'styled-components';
import { FaPlus } from 'react-icons/fa';
import colours from '../colours';

const { yellow } = colours;

const SubmitBtn = styled.button`
	background: ${yellow};
	border: none;
	border-radius: 50%;
	color: #fff;
	margin: 1rem;
	padding: 1.5rem;
`;

const SubmitBtnIcon = styled(FaPlus)`
	position: 'relative';
	top: '3px';
`;

const SubmitBtnSmall = styled(SubmitBtn)`
	padding: 1.25rem;
`;

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
