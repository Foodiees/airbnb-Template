import React from 'react'
import "./Header.css"

import SearchIcon from '@material-ui/icons/Search';
import { Avatar } from '@material-ui/core';
import  ExpandMore  from '@material-ui/icons/ExpandMore';
import  LanguageIcon  from '@material-ui/icons/Language';
import {Link} from "react-router-dom"
function Header() {
    return (
        <div className="header">
            <Link to="/">
            <img src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png" className="header_icon"></img>
            </Link>
            <div className="header_center">
                <input type="text"  />
                 <SearchIcon />
            </div>

            <div className="header_right">
                <p>Become a post</p>
                <LanguageIcon />
                <ExpandMore />
                <Avatar />
            </div>
        </div>
    )
}

export default Header
