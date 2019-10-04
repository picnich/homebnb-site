import React from 'react';
import PropTypes from 'prop-types';
import Layout from 'components/layout';
import Box from 'components/box';
import Title from 'components/title';
import { graphql } from 'gatsby';

import { IntroSection, MainTitle } from '../home.css';
// import { FormContact } from "../contact.css"

const Success = ({ data }) => (
  <Layout>
    <IntroSection bgImg={data.homeJson.mainImg.childImageSharp.fluid.src}>
      <Box>
        <MainTitle>
          <Title as="h1" size="large">
            {"Success!"}
          </Title>
          <Title as="p" size="large">
            {"We will get back to you as fast as we can."}
          </Title>
        </MainTitle>
      </Box>
    </IntroSection>
    <section style={{background: '#F1F2F6'}}>
      <Box>
      </Box>
    </section>
  </Layout>
);

Success.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Success;

export const query = graphql`
  query SuccessQuery {
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
