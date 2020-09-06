import React from 'react'
import { rhythm, scale } from "../utils/typography"
import styled from 'styled-components';
import { Link } from 'gatsby';


const SubHeaderNavbar = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px 10px 0px 10px;
    height: 100%;
    justify-content: space-between;
`
const FixedNavBar = ({title}) => {
    return (
        <div style={BODY_STYLE_NAVBAR}>
            <div style={SUB_BODY_NAVBAR}>
            <Link style={{height: "100%"}} to="/">
                <img style={ {height: "100%", marginBottom: "0"}} src={require("../../content/assets/great.jpg")}></img>
            </Link>
            <SubHeaderNavbar>
            <span style={{height: "50px", fontSize: '50px'}} >{title}</span>
                <div>
                    <ul style={{textDecoration: "none",
                        listStyleType: "none",
                        display: "flex",
                        flexDirection: "row",
                        marginBottom: "0"
                        }}>
                        <Link style={{textDecoration: "none"}} to="/blog"><li style={NAVBAR_ITEM}>Blogs</li></Link>
                        <Link to="/"><li style={NAVBAR_ITEM}>Seminar</li></Link>
                        <Link to="/"><li style={NAVBAR_ITEM}>Works</li></Link>
                        <Link to="/"><li style={NAVBAR_ITEM}>Contact</li></Link>
                    </ul>
                </div>
            </SubHeaderNavbar>
            </div>
        </div>
    )
}
export default FixedNavBar


const BODY_STYLE_NAVBAR = {
    height: "120px",
    boxShadow: "0 2px 2px -2px grey",
    display: "flex",
}

const SUB_BODY_NAVBAR = {
    display: "flex",
    marginLeft: `auto`,
    marginRight: `auto`,
    width: rhythm(34),
    alignContent: "flex-end",
    alignItems: "center"
}

const NAVBAR_ITEM = {
    textDecoration: "none",
    marginBottom: "0",
    padding: "0px 15px",
}