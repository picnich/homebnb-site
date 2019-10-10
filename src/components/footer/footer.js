import React from 'react';
import { Link } from 'gatsby';
import { Container } from './footer.css';

const Footer = () => (
  <Container>
    <p>© Copyright 2019</p>
    <ul>
      <li>
        <Link to="/contact">contact</Link>
      </li>
      <li>
        <Link to="/getstarted">Get Started</Link>
      </li>
    </ul>
  </Container>
);

export default Footer;
