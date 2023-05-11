import * as React from "react"
import Layout from "../components/layout"

const ContactPage = ({ location }) => {
  const siteTitle = "Contact"

  return (
    <Layout location={location} title={siteTitle}>
      <h1>Contact</h1>
      <p>If you want to get in touch, you can send me an email at edwin@genego.io.</p>
    </Layout>
  )
}

export default ContactPage
