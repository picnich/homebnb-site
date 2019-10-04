import React from 'react';
import PropTypes from 'prop-types';
import Layout from 'components/layout';
import Box from 'components/box';
import Title from 'components/title';
import { graphql } from 'gatsby';

import { IntroSection, MainTitle } from '../home.css';
import { FormContact } from "../contact.css"

const Contact = ({ data }) => (
  <Layout>
    <IntroSection bgImg={data.homeJson.mainImg.childImageSharp.fluid.src}>
      <Box>
        <MainTitle>
          <Title as="h1" size="large">
            {"Contact Us"}
          </Title>
          <Title as="p" size="large">
            {"Drop a line and we’ll get back to you as soon as we can."}
          </Title>
        </MainTitle>
      </Box>
    </IntroSection>
    <section style={{background: '#F1F2F6'}}>
      <Box>
        <FormContact>
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
        </FormContact>
      </Box>
      {/* <Box>
        <Benefits>
          {data.homeJson.benefits.map((benefit, i) => {
            return (
              <li key={i}>
                <div className="icon">
                  <Img fluid={benefit.icon.childImageSharp.fluid} />
                </div>
                <Title as="h4" size="small">
                  {benefit.title}
                </Title>
                <p>{benefit.copy}</p>
              </li>
              )
          })}
        </Benefits>
      </Box> */}
    </section>
  </Layout>
);

Contact.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Contact;

export const query = graphql`
  query ContactQuery {
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
      benefits {
        title
        copy
        icon {
          childImageSharp {
            fluid(maxWidth: 24) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      services {
        title
        copy
        items {
          title
          copy
          icon {
            childImageSharp {
              fluid(maxWidth: 40) {
                ...GatsbyImageSharpFluid
              }
            }
          }  
        }
      }
      keypoints {
        title
        items
      }
      offering {
        title
        items
        fee
        copy
        highlighted
      }
      cta_1 {
        smalltitle
        title
        btn
      }
      cta_2 {
        smalltitle
        title
        btn
        copy
      }
      gallery {
        title
        copy
        image {
          childImageSharp {
            fluid(maxHeight: 500, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`;
