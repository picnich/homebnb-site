import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Layout from 'components/layout';
import Box from 'components/box';
import Title from 'components/title';
import { graphql } from 'gatsby';
import { navigate } from 'gatsby-link'

import { IntroSection, MainTitle } from '../home.css';
import { FormContact } from "../contact.css"

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

const GetStarted = ({ data }) => {
  const [form, setForm] = useState({})

  function handleChange(e) {
    setForm({
      ...form, 
      [e.target.name]: e.target.value
    })
  }

  function handleSubmit(e) {
    e.preventDefault();
    // console.log(form)
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...form
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
            <Title as="h1" size="large">
              {"Lets Get Started"}
            </Title>
            <Title as="p" size="large">
              {"Enter a little bit of information and we'll get back to you as soon as possible."}
            </Title>
          </MainTitle>
        </Box>
      </IntroSection>
      <section style={{background: '#F1F2F6'}}>
        <Box>
          <FormContact>
            <form name="getStartedForm" method="POST" data-netlify="true" action="/success/" onSubmit={handleSubmit}>
              <input type="hidden" name="form-name" value="getStartedForm" />
              <div>
                <label htmlFor="fullname">YOUR NAME</label>
                <input name="fullname" type="text" placeholder="John Doe" onChange={handleChange} />
              </div>
              <div>
                <label htmlFor="email">YOUR EMAIL</label>
                <input name="email" type="text" placeholder="john@gmail.com" onChange={handleChange} />
              </div>
              <div className="onecol">
                <label htmlFor="postalcode">YOUR POSTAL CODE</label>
                <input onChange={handleChange} name="postalcode" type="text" placeholder="M4B 1B4" />
              </div>
              <div className="onecol">
                <label htmlFor="rooms">NUMBER OF ROOMS</label>
                <select onBlur={handleChange} name="rooms">
                  <option value="one" defaultValue>1</option>
                  <option value="two">2</option>
                  <option value="three">3</option>
                  <option value="fourplus">4+</option>
                </select>
              </div>
              <input type="submit" value="Submit" />
            </form>
          </FormContact>
        </Box>
      </section>
    </Layout>
  );
}

GetStarted.propTypes = {
  data: PropTypes.object.isRequired,
};

export default GetStarted;

export const query = graphql`
  query GetStartedQuery {
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
