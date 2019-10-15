import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import posed from 'react-pose';
import { Container } from './header.css';
import Title from 'components/title';
import Nav from 'components/header/nav';

// Example of a component-specific page transition
const AnimatedContainer = posed.div({
  enter: {
    y: 0,
    transition: {
      ease: 'easeInOut',
    },
  },
  exit: {
    y: '-100%',
    transition: {
      ease: 'easeInOut',
    },
  },
});

const Header = (props) => (
  <AnimatedContainer>
    <Container>
      <section className="container">
        <Link to="/">
          <div className="iconContainer">
            <svg width="100%" height="100%" viewBox="0 0 144 135" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" space="preserve" serif="http://www.serif.com/" style={{
              fillRule:"evenodd",clipRule:"evenodd",strokeLinejoin:"round", strokeMiterlimit:2
            }}>
                <path d="M106.855,99.154L106.855,54.648L123.435,64.22L123.435,134.703L106.855,134.703L106.855,116.401L38.049,116.401L38.049,134.703L21.468,134.703L21.468,64.22L38.049,54.648L38.049,99.154L106.855,99.154ZM54.499,73.173C59.14,73.174 62.909,76.942 62.909,81.582C62.909,86.224 59.14,89.992 54.499,89.992L54.497,89.992C49.856,89.992 46.088,86.224 46.088,81.582C46.088,76.942 49.856,73.174 54.497,73.173L54.499,73.173ZM144.005,41.498L144.005,60.452L72.45,19.147L0,60.972L0,41.827L72,0.002L144.005,41.498Z" style={{fill: '#0b2b65'}}/>
            </svg>
          </div>
          <Title as="h4">{props.title}</Title>
        </Link>

        <Nav />
      </section>
    </Container>
  </AnimatedContainer>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
