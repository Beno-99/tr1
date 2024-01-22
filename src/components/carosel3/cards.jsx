import React from "react";

import { PiCurrencyDollarSimpleLight } from "react-icons/pi";

import './cards.css'
const Cards = props =>{

    const {
        href,
        title,
        icon,
        text1,
        text2,
        text3,
        image,
        price,
        em
    }=props

    return(
        <>
            
            <div >
                <div className="card" style={{backgroundImage:`url(${image})`,objectFit:'cover',backgroundRepeat:'no-repeat',backgroundPosition:'center'}}>
                    <div><p className="title" ><span>{icon}</span>{title}</p></div>
                    <div>
                        <a className="href" href={href}>
                            <div className="content">
                                
                                <p className="text1">{text1}</p>
                                <p className="text2"><em style={{fontFamily:'basetica-light'}}>{em}</em>{text2}</p>
                                <p className="text3">{text3}</p>
                                    <div className="Action" >
                                        <button>Discover Trip</button>
                                        <span>
                                            <div>From</div>
                                            <div style={{display:'flex',textAlign:'center',justifyContent:'center',alignItems:'center',fontSize:'large'}}>
                                                <span>{<PiCurrencyDollarSimpleLight/>}</span>{price}</div>
                                        </span>
                                    </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            
        </>
    )
}
export default Cards;