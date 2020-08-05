import React, {ReactElement} from 'react';
import StyledFooter from './Footer';
import Navbar from './Navbar';

interface Props {
  children: ReactElement;
}

function Layout({children}: Props): ReactElement {
  return (
    <div
      style={{
        padding: '0',
        margin: '0',
      }}
    >
      <Navbar />
      {children}
      <StyledFooter />
    </div>
  );
}

export default Layout;
