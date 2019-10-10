import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Layout from 'components/layout';
import Box from 'components/box';
import Title from 'components/title';
import { graphql, Link } from 'gatsby';
import { navigate } from 'gatsby-link'
import Img from "gatsby-image"

import { IntroSection, MainTitle, Benefits, FormSection, Services, Keypoints, Offering, CtaContainer } from '../home.css';

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}


const Index = ({ data }) => {
  const [estimateForm, setEstimateForm] = useState({});

  function handleChange(e) {
    setEstimateForm({
      ...estimateForm, 
      [e.target.name]: e.target.value
    })
    // console.log(estimateForm);
  }

  function handleSubmit(e) {
    e.preventDefault();
    // console.log(estimateForm);
    const form = e.target;
    fetch("/", {
      method: "POST", 
      headers: {"Content-Type": "appplication/x-www-form-urlencoded"}, 
      body: encode({
        "form-name": form.getAttribute("name"), 
        ...estimateForm
      })
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch(error => alert(error));
  }
  return (
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
            <form 
              name="homeEstimate" 
              method="POST" 
              action="/est-success/" 
              data-netlify="true" 
              onSubmit={handleSubmit}              
            >
              <input type="hidden" name="form-name" value="homeEstimate" />
              <div>
                <label htmlFor="introEmail">YOUR EMAIL</label>
                <input onChange={handleChange} name="introEmail" type="email" placeholder="john@gmail.com" />
              </div>
              <label htmlFor="introPostal">
                YOUR POSTAL CODE
                <input onChange={handleChange} name="introPostal" type="text" placeholder="M4B 1B4" />
              </label>
              <label htmlFor="introRooms">
                NUMBER OF ROOMS
                <select onBlur={handleChange} name="introRooms">
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
            <form 
              name="homeCTAEstimate" 
              method="POST" 
              action="/est-success/" 
              data-netlify="true" 
              onSubmit={handleSubmit} 
            >
              <input type="hidden" name="form-name" value="homeCTAEstimate" />
              <div>
                <label htmlFor="ctaEmail">YOUR EMAIL</label>
                <input onChange={handleChange} name="ctaEmail" type="email" placeholder="john@gmail.com"/>
              </div>
              <div>
                <label htmlFor="ctaPostal">YOUR POSTAL CODE</label>
                <input onChange={handleChange} name="ctaPostal" type="text" placeholder="M4B 1B4"/>
              </div>
              <div>
                <label htmlFor="ctaRooms">NUMBER OF ROOMS</label>
                <select onBlur={handleChange} name="ctaRooms">
                    <option value="one" selected>1</option>
                    <option value="two">2</option>
                    <option value="three">3</option>
                    <option value="fourplus">4+</option>
                  </select>
              </div>
              <input type="submit" value="Get your Estimate" />
            </form>        
          </div>
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
}

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
