import React from 'react';
import useForm from '../customHooks/useForm';
import {
  InputScoresForm,
  ClimbNumInput
} from '../components/AddScoreForm/AddScoreElements';
import AddAttempt from '../components/AddScoreForm/AddAttempt';
import SubmitButtonPlus from '../components/SubmitButtonPlus/SubmitButtonPlus';
import axios from 'axios';

const LogAttempt = () => {

  const [values, handleChange] = useForm({
    climbNum: '',
    isClimbCompleted: '',
    attemptsNum: ''
  })
  const { climbNum, isClimbCompleted, attemptsNum } = values;
  //
  //
  // Post form data to API -->
  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post('/api/log-attempt', {
        participant: 'james', // participant and round values should be added automatically via useContext
        round: '1',
        climbNum: climbNum,
        isClimbCompleted: isClimbCompleted,
        attemptsNum: attemptsNum
      })
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };

  return (
    <InputScoresForm>
      <ClimbNumInput onChange={handleChange} name='climbNum' value={climbNum} />
      <AddAttempt
        attemptsNum1='Flash!'
        attemptsNum2='2nd Go'
        attemptsNum3='3rd Go'
        attemptsNum4='4+ Goes'
        radioText='Climb Completed!'
        isClimbCompleted='completed'
        onCompletedSelection={handleChange}
        attemptsNumChange={handleChange}
      />
      <hr />
      <AddAttempt
        attemptsNum1='1'
        attemptsNum2='2'
        attemptsNum3='3'
        attemptsNum4='4+'
        radioText='Just Logging Some Attempts'
        isClimbCompleted='notCompleted'
        onCompletedSelection={handleChange}
        attemptsNumChange={handleChange}
      />
      <hr />
      <SubmitButtonPlus onSubmit={handleSubmit} />
    </InputScoresForm>
  );
};

export default LogAttempt;
