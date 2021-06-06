import React from 'react';

import {
  AddScoreContainer,
  RadioLabel,
  RadioInput,
  ChooseScoreGrid,
  ChooseScoreBtn,
  ChooseScoreLabel
} from './AddScoreElements';

const AddAttempt = (props) => {
  const {
    isClimbCompleted,
    onCompletedSelection,
    attemptsNumChange,
    attemptsNum1,
    attemptsNum2,
    attemptsNum3,
    attemptsNum4,
    radioText
  } = props;
  return (
    <AddScoreContainer>
      <RadioLabel>
        {radioText}
        <RadioInput
          name='isClimbCompleted'
          onChange={onCompletedSelection}
          value={isClimbCompleted}
          type='radio'
        />
      </RadioLabel>
      <ChooseScoreGrid>
        <ChooseScoreLabel>
          {attemptsNum1}
          <ChooseScoreBtn type='radio' name='attemptsNum' value='1' onClick={attemptsNumChange} />
        </ChooseScoreLabel>
        <ChooseScoreLabel>
          {attemptsNum2}
          <ChooseScoreBtn type='radio' name='attemptsNum' value='2' onClick={attemptsNumChange} />
        </ChooseScoreLabel>
        <ChooseScoreLabel>
          {attemptsNum3}
          <ChooseScoreBtn type='radio' name='attemptsNum' value='3' onClick={attemptsNumChange} />
        </ChooseScoreLabel>
        <ChooseScoreLabel>
          {attemptsNum4}
          <ChooseScoreBtn
            type='radio'
            name='attemptsNum'
            value='4Plus'
            onClick={attemptsNumChange}
          />
        </ChooseScoreLabel>
      </ChooseScoreGrid>
    </AddScoreContainer>
  );
};

export default AddAttempt;
