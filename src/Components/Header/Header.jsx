import React from "react";

import './Header.css'
//Img
import Banner from '../../assets/img/Banner.jpg'

export default function Header(){
    return(
        <>  
            <div className="header">
                <h1 className="title-header">Landing Page ZERO </h1>
                <p>Te ofrecemos el mejor servicio</p>
                <img className="img-banner" src={Banner} alt='Banner'/>
            </div>
        </>
    )
}