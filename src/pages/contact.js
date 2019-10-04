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
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

const Contact = ({ data }) => {
  const [contactForm, setcontactForm] = useState({});

  function handleChange(e) {
    setcontactForm({
      ...contactForm, 
      [e.target.name]: e.target.value
    })
    // console.log(contactForm);
  }

  function handleSubmit(e) {
    e.preventDefault();
    // console.log(contactForm);
    const form = e.target;
    fetch("/", {
      method: "POST", 
      headers: {"Content-Type": "appplication/x-www-form-urlencoded"}, 
      body: encode({
        "form-name": form.getAttribute("name"), 
        ...contactForm
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
            <form 
                name="contact" 
                method="POST" 
                action="/success/" 
                data-netlify="true" 
                onSubmit={handleSubmit}              
                data-netlify-honeypot="bot-field"
              >
              <input type="hidden" name="bot-field" />
              <input type="hidden" name="form-name" value="contact" />
              <label htmlFor="introName">
                YOUR NAME
                <input id="introName" onChange={handleChange} name="name" type="text" placeholder="John Doe" required/>
              </label>
              <label htmlFor="introEmail">
                YOUR EMAIL
                <input id="introEmail" onChange={handleChange} name="email" type="email" placeholder="john@gmail.com" required />
              </label>
              <label htmlFor="introSubject">
                YOUR SUBJECT
                <input id="introSubject" onChange={handleChange} name="name" type="text" placeholder="Subject..." />
              </label>
              <label htmlFor="introSubject">
                YOUR MESSAGE
                <textarea placeholder="Type your message here..." onChange={handleChange} required />
              </label>
              <input type="submit" value="Get your Estimate" />
            </form>
          </FormContact>
        </Box>
      </section>
    </Layout>
  );
}

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
    }
  }
`;
