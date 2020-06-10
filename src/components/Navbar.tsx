import {Link} from 'gatsby';
import React, {ReactElement} from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  text-align: center;
  border-bottom: 1px solid #f38e18;
  margin-bottom: 1px;

  a {
    text-decoration: none;
    color: #f38e18;
  }

  & img {
    height: 8vh;
  }

  & ul {
    display: flex;
    align-items: center;
    justify-content: center;
    list-style: none;

    & li {
      border: none;
      margin-right: 16px;
      outline: none;
      transition: 0.35s ease-in;
      & a {
        text-decoration: none;
      }
      &:hover {
        border-bottom: 1px solid #f38e18;
      }
    }
  }

  @media (max-width: 750px) {
    flex-direction: column;
  }
`;

export default function Navbar({}: {}): ReactElement {
  return (
    <Nav>
      <img src={require('../img/logo.png')} alt="glug-iiitu-logo" />
      <p>Indian Institute Of Information Technology Una</p>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/wiki">Wiki</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </Nav>
  );
}
