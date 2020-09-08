import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"
import Body from "../components/Body"
import SimpleForm from "../components/Popup"
import FixedNavBar from "../components/FixedNavBar"
import 'bootstrap/dist/css/bootstrap.min.css';

class IndexPage extends React.Component {
  render() {
    const siteTitle = "Shadid Haque"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Home"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <Body />
        {/* <SimpleForm /> */}
        <Link to="/blog/">
          <Button marginTop="35px">Go to Blogs</Button>
        </Link>
      </Layout>
    )
  }
}

export default IndexPage
