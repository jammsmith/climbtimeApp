import React from 'react';

import {
  SubmitBtn,
  SubmitBtnSmall,
  SubmitBtnIcon
} from './SubmitButtonPlusElements';

const SubmitButtonPlus = props => {
  const submitBtn = (
    <SubmitBtn type='submit' onClick={props.onSubmit}>
      <SubmitBtnIcon size={30} />
    </SubmitBtn>
  );

  const smallSubmitBtn = (
    <SubmitBtnSmall>
      <SubmitBtnIcon size={20} />
    </SubmitBtnSmall>
  );

  return props.small ? smallSubmitBtn : submitBtn;
};

export default SubmitButtonPlus;
