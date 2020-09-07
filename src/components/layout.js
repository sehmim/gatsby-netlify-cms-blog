import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import { rhythm, scale } from "../utils/typography"
import FixedNavBar from "./FixedNavBar"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    const blogPath = `${__PATH_PREFIX__}/blog/`

    return (
      <Wrapper>
        <FixedNavBar title={title}/>
        <div
          style={{
            marginLeft: `auto`,
            marginRight: `auto`,
            maxWidth: rhythm(34),
            padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
            marginTop: "120px"
          }}
        >
          <main>{children}</main>
        </div>
        <Footer>
          © {new Date().getFullYear()}, Shadid Haque
          {` `} <br></br>
          <a href="https://www.gatsbyjs.org">Github</a>
        </Footer>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  min-height: 100vh;
`

const Footer = styled.footer`
  text-align: center;
  margin: 24px;
`

export default Layout
