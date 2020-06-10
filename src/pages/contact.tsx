import React, {ReactElement} from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';

const StyledContact = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & iframe {
    width: 70vw;
    height: 50vh;
    border: none;
  }
`;

export default function Contact(): ReactElement {
  return (
    <Layout>
      <StyledContact>
        <h2>Join Us On Discord</h2>
        <iframe src="https://discordapp.com/widget?id=716979242897899541&theme=dark" />
        <p>Other Handles will be added soon...</p>
      </StyledContact>
    </Layout>
  );
}
