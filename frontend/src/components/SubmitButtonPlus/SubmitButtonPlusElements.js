import styled from 'styled-components';
import { FaPlus } from 'react-icons/fa';

import colours from '../../colours';

const { primary } = colours;

export const SubmitBtn = styled.button`
  background: ${primary};
  border: none;
  border-radius: 50%;
  color: #fff;
  margin: 1rem;
  padding: 1.5rem;
}
`;

export const SubmitBtnSmall = styled(SubmitBtn)`
  padding: 1rem;
`;

export const SubmitBtnIcon = styled(FaPlus)`
  position: 'relative';
  top: '3px';
`;
