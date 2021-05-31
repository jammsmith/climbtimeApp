import styled from 'styled-components';
import colours from '../../colours';

const { primary, dark, light } = colours;

export const InputScoresForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ClimbNumInput = styled.input`
  background-color: transparent;
  border-radius: 3px;
  border: 0.1rem solid ${primary};
  color: ${primary};
  font-size: 1rem;
  font-weight: bold;
  height: 5rem;
  margin: 1.5rem;
  padding: 0.25rem 1rem;
  text-align: center;
  width: 5rem;
  :focus,
  :active {
    border: 0.2rem solid ${primary};
    outline: none;
    color: ${primary};
  }
`;

export const AddScoreContainer = styled.div`
  width: 95%;
  max-width: 500px;
`;

export const RadioLabel = styled.label`
  color: ${dark};
`;

export const RadioInput = styled.input`
  color: ${dark};
  margin-left: 0.25rem;
`;

export const ChooseScoreGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.25rem;
  justify-content: center;
  margin: 1rem auto;
  width: 80%;
`;

export const ChooseScoreLabel = styled.label`
  background-color: #fff;
  border: 0.2rem solid ${primary};
  border-radius: 5px;
  color: ${primary};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.15rem;
  font-weight: bold;
  overflow: hidden;
  position: relative;
  height: 80px;
  width: 100px;

  :active,
  :hover {
    background: ${primary};
    color: ${light};
    cursor: pointer;
    transition: all 0.2s ease-in;
  }

  @media (min-width: 768px) {
    margin: 0.5rem;
  }
`;

export const ChooseScoreBtn = styled.input`
  position: absolute;
  opacity: 0;
  width: 0;
`;
