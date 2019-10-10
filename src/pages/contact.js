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

const Contact = ({ data }) => {
  const [contactForm, setForm] = useState({})

  function handleChange(e) {
    setForm({
      ...contactForm, 
      [e.target.name]: e.target.value
    })
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(contactForm)
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
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
            <form name="contactForm" method="POST" data-netlify="true" action="/success/" onSubmit={handleSubmit}>
              <input type="hidden" name="form-name" value="contactForm" />
              <div>
                <label htmlFor="fullname">YOUR NAME</label>
                <input name="fullname" type="text" placeholder="John Doe" onChange={handleChange} />
              </div>
              <div>
                <label htmlFor="email">YOUR EMAIL</label>
                <input name="email" type="text" placeholder="john@gmail.com" onChange={handleChange} />
              </div>
              <div>
                <label htmlFor="subject">YOUR SUBJECT</label>
                <input name="subject" type="text" placeholder="Subject..." onChange={handleChange} />
              </div>
              <div>
                <label htmlFor="message">YOUR MESSAGE</label>
                <textarea name="message" placeholder="Type your message here..." onChange={handleChange} />
              </div>
              <input type="submit" value="Submit" />
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
