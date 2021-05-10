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
          keywords={[`keyboard blog`, `enmatt`, `keyboard`, `keyboards`, `mechanical keyboards`, `custom keyboards`, `enmat`,`enmatt's mechanical keyboard blog`, `best mechanical keyboard`, `mechanicalkeyboards`]}
        />

        <h1>
          Heya,{" "}
          <span role="img" aria-label="wave emoji">
            👋
          </span>
        </h1>
        <p>Welcome to enmatt.xyz; a keyboard review blog based in the UK</p>
        <p>
           We specialise in budget customised mechanical keyboards although, we do occasionally cover more unique and rare boards. We aim to give honest and non-biased reviews whilst being entertaining along the way. If you love keyboards as much as we do, this is the place for you.
        </p>
        <Link to="/blog/">
          <Button marginTop="35px">Go to Blog</Button>
        </Link>
      </Layout>
    )
  }
}

export default IndexPage
