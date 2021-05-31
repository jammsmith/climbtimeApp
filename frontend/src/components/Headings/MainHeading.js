import React from 'react';
import styled from 'styled-components';

import colours from '../../colours';

const { primary } = colours;

const MainHeading = styled.h1`
  color: ${primary};
  margin: 1rem auto;
  padding: 0;
`;

const Heading = (props) => <MainHeading>{props.headingContent}</MainHeading>;

export default Heading;
