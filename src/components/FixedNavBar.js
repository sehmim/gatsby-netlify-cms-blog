import React from 'react'
import { rhythm, scale } from "../utils/typography"
import styled from 'styled-components';
import { Link } from 'gatsby';


const FixedNavBar = ({title}) => {
    return (
        <Navbar>
            <div style={SUB_BODY_NAVBAR}>
            <Link to="/">
                <ImageTag style={ {height: "100%", marginBottom: "0"}} src={require("../../content/assets/relaunch_day.svg")}></ImageTag>
            </Link>
            <SubHeaderNavbar>

                <Title >{title}</Title>
                <div>
                    <ul style={{textDecoration: "none",
                        listStyleType: "none",
                        display: "flex",
                        flexDirection: "row",
                        marginBottom: "0"
                        }}>
                        <Link style={{textDecoration: "none"}} to="/blog"><li style={NAVBAR_ITEM_1}>Blogs</li></Link>
                        <Link to="/Contact"><li style={NAVBAR_ITEM_2}>Contact</li></Link>
                    </ul>
                </div>

            </SubHeaderNavbar>
            </div>
        </Navbar>
    )
}
export default FixedNavBar

const Navbar = styled.div`
    box-shadow: 0 2px 2px -2px grey;
    height: 120px;
    width: 100%;
    position: fixed;
    background-color: rgba(0,0,0,0.9);
    overflow: hidden;
    top: 0;
`

const SubHeaderNavbar = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px 10px 0px 30px;
    height: 100%;
    color: #000;
    justify-content: space-between;
`

const ImageTag = styled.img`
    height: 100%;
    margin-bottom: 0px;
    width: 100px;
    padding: 10px 0px 10px 0px;
`

const Title = styled.span`
    height: 64px;
    font-size: 40px;
    color: #fafafa;
`

const BODY_STYLE_NAVBAR = {
    height: "120px",
    boxShadow: "0 2px 2px -2px grey",
    display: "flex",
    position: "relative"
}

const SUB_BODY_NAVBAR = {
    display: "flex",
    marginLeft: `auto`,
    marginRight: `auto`,
    width: rhythm(34),
    alignContent: "flex-end",
    alignItems: "center"
}

const NAVBAR_ITEM_1 = {
    padding: "0px 15px 0px 0px",
    color: "#999",

}

const NAVBAR_ITEM_2 = {
    padding: "0px 15px",
    color: "#888",

}