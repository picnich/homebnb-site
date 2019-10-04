import React from 'react';
// import PropTypes from 'prop-types';
import Layout from 'components/layout';
import Box from 'components/box';
import Title from 'components/title';
import { graphql } from 'gatsby';

import { IntroSection, MainTitle } from '../home.css';
// import { FormContact } from "../contact.css"

const EstSuccess = ({ data }) => (
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
        {/* <FormContact>
          <form>
            <label htmlFor="introName">
              YOUR NAME
              <input id="introName" name="name" type="text" placeholder="John Doe"/>
            </label>
            <label htmlFor="introEmail">
              YOUR EMAIL
              <input id="introEmail" name="email" type="email" placeholder="john@gmail.com"/>
            </label>
            <label htmlFor="introSubject">
              YOUR SUBJECT
              <input id="introSubject" name="name" type="text" placeholder="Subject..."/>
            </label>
            <label htmlFor="introSubject">
              YOUR MESSAGE
              <textarea placeholder="Type your message here..." />
            </label>
            <input type="submit" value="Get your Estimate" />
          </form>
        </FormContact> */}
      </Box>
    </section>
  </Layout>
);

// EstSuccess.propTypes = {
//   data: PropTypes.object.isRequired,
// };

export default EstSuccess;

export const query = graphql`
  query EstContactQuest {
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
