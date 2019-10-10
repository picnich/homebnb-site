import React from 'react'
import { navigate } from 'gatsby-link'
import {useState} from "react"

import Layout from 'components/layout';

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}


const Contact2 = () => {
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
      <h1>Contact</h1>
      <div className="contactForm">
        <form name="contactTwo" method="POST" data-netlify="true" action="/success/" onSubmit={handleSubmit}>
            <input type="hidden" name="form-name" value="contactTwo" />
          <div>
            <label htmlFor="fullname">Full Name</label>
            <input onChange={handleChange} type="text" name="fullname" placeholder="Your full name" />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input onChange={handleChange} type="text" name="email" placeholder="Your email" />
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea onChange={handleChange} name="message" placeholder="Your message.."></textarea>
          </div>
          <input type="submit" value="Submit" className="link darkTheme" />
        </form>
      </div>
    </Layout>
  )
}



export default Contact2
