import React from 'react';
import PropTypes from 'prop-types';
import Layout from 'components/layout';
import Box from 'components/box';
import Title from 'components/title';
import { graphql, Link } from 'gatsby';
import Img from "gatsby-image"

import { IntroSection, MainTitle, Benefits, FormSection, Services, Keypoints, Offering, CtaContainer } from '../home.css';

const Index = ({ data }) => (
  <Layout>
    <IntroSection bgImg={data.homeJson.mainImg.childImageSharp.fluid.src}>
      <Box>
        <MainTitle>
          <Title as="h5" size="small">
            {data.homeJson.category}
          </Title>
          <Title as="h1" size="large">
            {data.homeJson.title}
          </Title>
        </MainTitle>
      </Box>
    </IntroSection>
    <section style={{background: '#F1F2F6'}}>
      <Box>
        <FormSection>
          <Title as="h3" size="small">
            {`Sign up to see how much you can earn with your home`}
          </Title>
          <form>
            <label htmlFor="introEmail">
              YOUR EMAIL
              <input id="introEmail" name="email" type="email" placeholder="john@gmail.com"/>
            </label>
            <label htmlFor="introPostal">
              YOUR POSTAL CODE
              <input id="introPostal" name="postal" type="text" placeholder="M4B 1B4"/>
            </label>
            <label htmlFor="introRooms">
              NUMBER OF ROOMS
              <select id="introRooms" name="rooms">
                <option value="one" selected>1</option>
                <option value="two">2</option>
                <option value="three">3</option>
                <option value="fourplus">4+</option>
              </select>
            </label>
            <input type="submit" value="Get your Estimate" />
          </form>
        </FormSection>
      </Box>
      <Box>
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
      </Box>
    </section>
    <Box>
      <Services>
        <Title as="h2" size="large">
          {data.homeJson.services.title}
        </Title>

        <p>{data.homeJson.services.copy}</p>
        <ul>
        {data.homeJson.services.items.map((service, i) => {
          return (
            <li key={i}>
                  <div className="icon">
                    <Img fluid={service.icon.childImageSharp.fluid} />
                  </div>
                  <Title as="h4" size="small">
                    {service.title}
                  </Title>
                  <p>{service.copy}</p>
              </li>
          )
        })}
        </ul>
      </Services>
    </Box>

    <Box>
      <Keypoints>
        <Title as="h2" size="large">
          {data.homeJson.keypoints.title}
        </Title>
        <ul>
          {
            data.homeJson.keypoints.items.map((item, i) => <li key={i}>{item}</li>)
          }
        </ul>
      </Keypoints>
    </Box>


    <Offering>
      <Title as="h2" size="large">
        {data.homeJson.offering.title}
      </Title>
      <Box>
        <section>
          <div className="price">
            <p>{data.homeJson.offering.fee}</p>
            <p>{data.homeJson.offering.copy}<span>{data.homeJson.offering.highlighted}</span></p>
          </div>
          <ul>
            {
              data.homeJson.offering.items.map((item, i) => <li key={i}>{item}</li>)
            }
          </ul>
        </section>
      </Box>
    </Offering>

    <Box>
      <CtaContainer>
        <div>
          <Title as="h5" size="small">
            {data.homeJson.cta_1.smalltitle}
          </Title>
          <Title as="h2" size="large">
            {data.homeJson.cta_1.title}
          </Title>
          <form>
            <label htmlFor="ctaEmail">
              YOUR EMAIL
              <input id="ctaEmail" name="email" type="email" placeholder="john@gmail.com"/>
            </label>
            <label htmlFor="ctaPostal">
              YOUR POSTAL CODE
              <input id="ctaPostal" name="postal" type="text" placeholder="M4B 1B4"/>
            </label>
            <label htmlFor="ctaRooms">
              NUMBER OF ROOMS
              <select id="ctaRooms" name="rooms">
                <option value="one" selected>1</option>
                <option value="two">2</option>
                <option value="three">3</option>
                <option value="fourplus">4+</option>
              </select>
            </label>
            <input type="submit" value="Get your Estimate" />
          </form>        </div>
        <div>
          <Title as="h5" size="small">
            {data.homeJson.cta_2.smalltitle}
          </Title>
          <Title as="h2" size="large">
            {data.homeJson.cta_2.title}
          </Title>
          <p>{data.homeJson.cta_2.copy}</p>
          <Link to="/contact">
            <button>{data.homeJson.cta_2.btn}</button>
          </Link>
        </div>
      </CtaContainer>
    </Box>
  </Layout>
);

Index.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Index;

export const query = graphql`
  query HomepageQuery {
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