import React,{useState} from 'react'
import {Link }from "react-router-dom"
import {FaBars,AiOutlineClose} from "react-icons/all"
import navData from "../Data/navElements"
import "../../styles/navbar.css"

const SideNavbar = () => {
    return (
        <>
            <div>
                <ul className="nav_items">
                        {
                         navData.map((element,index)=>{
                            return(
                                    <li key ={index} className="menu_element">
                                     <Link 
                                        to={element.path}
                                        className="link"
                                     >
                                         {element.icon}
                                         {element.title}
                                     </Link>
                                   </li>
                                )
                                
                            })
                        }
                </ul>
            </div>
           
        </>
    )
}

export default SideNavbar;

