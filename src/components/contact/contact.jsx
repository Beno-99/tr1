import React from "react";

import { PiPhoneThin } from "react-icons/pi";
import { TfiEmail } from "react-icons/tfi";


import './contact.css';

const Contact = ()=>{
    return(
        <>
            <div className="contact">
                <div className="main">
                    <div className="texts">
                        <h1>Contact a Travel Researcher</h1>
                        <p>We always aim to reply within 24 hours.</p>
                    </div>
                    <div className="phone-mail">
                        <button className="phone">
                            <span style={{fontSize:'40px'}}>{<PiPhoneThin/>}</span>
                            <p style={{fontSize:'18px'}}>Call us</p>
                            <span style={{fontFamily:'basetica-light'}}> +1 (833) 215 9353</span>
                        </button>
                        <button className="mail">
                            
                                <span style={{fontSize:'40px',paddingBottom:'10px'}}>{<TfiEmail/>}</span>
                                <p>Send us an enquiry</p>
                            
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Contact;