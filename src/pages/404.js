import React from 'react';
import PropTypes from 'prop-types';
import Layout from 'components/layout';
import Box from 'components/box';
import Title from 'components/title';
import { graphql, Link } from 'gatsby';

import { IntroSection, MainTitle } from '../home.css';
// import { FormContact } from "../contact.css"

const NotFound = ({ data }) => (
  <Layout>
    <IntroSection bgImg={data.homeJson.mainImg.childImageSharp.fluid.src}>
      <Box>
        <MainTitle>
          <Title as="h1" size="large">
            {"404"}
          </Title>
          <Title as="p" size="large">
            {"Sorry about that but we couldn't find the page you were looking for."}
          </Title>
          <Link to="/contact">
            <button>Go home</button>
          </Link>

        </MainTitle>
      </Box>
    </IntroSection>
    <section style={{background: '#F1F2F6'}}>
      <Box>
      </Box>
    </section>
  </Layout>
);

NotFound.propTypes = {
  data: PropTypes.object.isRequired,
};

export default NotFound;

export const query = graphql`
  query NotFoundQuery {
    homeJson {
      title
      category
      mainImg {
        childImageSharp {
          fluid(maxHeight: 440) {
            ...GatsbyImageSharpFluid
          }
        }
      } 
    }
}
`;
