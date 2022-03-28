import React from 'react'
// import headerElements from '../Data/headerElements';
import icons from "../../materialui/global"
import {Link } from "react-router-dom"
import "../../styles/header.css"

const Header = () => {
    return (
        <div className="header">
            <Link to ="/">Covid 19 stats</Link>
            <icons.Button color ="primary" variant="contained" style ={{fontSize:".7rem", marginRight:"5rem",marginBottom:".5rem"}}  >Login</icons.Button>
        </div>
    )
}

export default Header
