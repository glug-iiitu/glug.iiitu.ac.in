import React, {ReactElement} from 'react';
import styled from 'styled-components';

const Footer = styled.footer`
  width: 100%;
  padding: 6px 0 0 0;
  margin-top: 50px;
  height: 8vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-top: 2px solid #f38e18;
`;

export default function StyledFooter(): ReactElement {
  return (
    <Footer>
      <p>GLUG-IIITU</p>
      <p>Developed with &hearts; & Gatsby </p>
    </Footer>
  );
}
