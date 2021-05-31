import React, { useState } from 'react';
import {
  InputScoresForm,
  ClimbNumInput
} from '../components/AddScoreForm/AddScoreElements';
import AddAttempt from '../components/AddScoreForm/AddAttempt';
import SubmitButtonPlus from '../components/SubmitButtonPlus/SubmitButtonPlus';
import axios from 'axios';

const LogAttempt = () => {
  const [newScore, setNewScore] = useState({
    climbNum: '',
    isClimbCompleted: '',
    attemptsNum: ''
  });

  const onClimbNumChange = (event) => {
    setNewScore((prevValues) => {
      return {
        ...prevValues,
        climbNum: event.target.value
      };
    });
  };

  const onCompletedSelection = (event) => {
    setNewScore((prevValues) => {
      return {
        ...prevValues,
        isClimbCompleted: event.target.value
      };
    });
  };

  const onAttemptsNumChange = (event) => {
    setNewScore((prevValues) => {
      return {
        ...prevValues,
        attemptsNum: event.target.value
      };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post('/api/log-attempt', {
        participant: 'james', // participant and round values should be added automatically
        round: '1',
        newScore
      })
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };

  return (
    <InputScoresForm>
      <ClimbNumInput onChange={onClimbNumChange} value={newScore.climbNum} />
      <AddAttempt
        attemptsNum1='Flash!'
        attemptsNum2='2nd Go'
        attemptsNum3='3rd Go'
        attemptsNum4='4+ Goes'
        radioText='Climb Completed!'
        isClimbCompleted='completed'
        onCompletedSelection={onCompletedSelection}
        attemptsNumChange={onAttemptsNumChange}
      />
      <hr />
      <AddAttempt
        attemptsNum1='1'
        attemptsNum2='2'
        attemptsNum3='3'
        attemptsNum4='4+'
        radioText='Just Logging Some Attempts'
        isClimbCompleted='notCompleted'
        onCompletedSelection={onCompletedSelection}
        attemptsNumChange={onAttemptsNumChange}
      />
      <hr />
      <SubmitButtonPlus onSubmit={handleSubmit} />
    </InputScoresForm>
  );
};

export default LogAttempt;
