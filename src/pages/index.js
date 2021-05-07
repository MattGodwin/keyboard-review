import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"

class IndexPage extends React.Component {
  render() {
    const siteTitle = "Enmatt's Keyboard Reviews."

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Home"
          keywords={[`blog`, `enmatt`, `keyboard`, `keyboards`, `mechanical keyboards`]}
        />

        <h1>
          Hey people{" "}
          <span role="img" aria-label="wave emoji">
            👋
          </span>
        </h1>
        <p>I'm Enmatt and this is my keyboard review blog.</p>
        <p>
          I am a mechanical keyboard enthusiast from the UK and I like to write about my keyboard related projects. If you would like to contact me about any possible partnerships, or just to say hi, <a href="https://twitter.com/EnmattDev">follow me on twitter.</a>
        </p>
        <Link to="/blog/">
          <Button marginTop="35px">Go to Blog</Button>
        </Link>
      </Layout>
    )
  }
}

export default IndexPage
