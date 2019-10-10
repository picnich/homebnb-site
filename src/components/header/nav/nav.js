import React from 'react';
import { Link } from 'gatsby';
import { Container } from './nav.css';

const Nav = () => (
  <Container>
    <ul>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
      <li className="main">
        <Link to="/getstarted">Get Started</Link>
      </li>
    </ul>
  </Container>
);

export default Nav;
