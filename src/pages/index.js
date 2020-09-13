import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"
import Body from "../components/Body"
import "../styles/index.css";
import 'bootstrap/dist/css/bootstrap.min.css';

class IndexPage extends React.Component {
  render() {
    const siteTitle = "Stovokor"

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
        <div className="contribute">
          <div className="contribute-contents">
            <h5>Wanna Add Your Own Blog ? </h5>
            <a href="/admin/#/">
              <Button >Contribute</Button>
            </a>
          </div>
        </div>
      </Layout>
    )
  }
}

export default IndexPage
