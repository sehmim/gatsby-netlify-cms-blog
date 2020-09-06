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
                <img style={ {height: "100%", marginBottom: "0"}} src="https://media-exp1.licdn.com/dms/image/C4E03AQFR_avttPWM2Q/profile-displayphoto-shrink_800_800/0?e=1605139200&v=beta&t=2Bbuiia8Fqn-THckvnV9y67tfLUKsFk6xpn5g1tOe-k"></img>
            </Link>
            <SubHeaderNavbar>
            <span style={{height: "50px", fontSize: '40px'}} >{title}</span>
                <div>
                    <ul style={{textDecoration: "none",
                        listStyleType: "none",
                        display: "flex",
                        flexDirection: "row",
                        marginBottom: "0"
                        }}>
                        <Link style={{textDecoration: "none"}} to="/blog"><li style={NAVBAR_ITEM}>Blogs</li></Link>
                        <Link to="/Work"><li style={NAVBAR_ITEM}>Works</li></Link>
                        <Link to="/Contact"><li style={NAVBAR_ITEM}>Contact</li></Link>
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