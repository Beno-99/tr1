import React from "react";

import Rating from '../../assets/image/rating.jpg';

import './Rate.css';

const Rate = () =>{
    return(
        <>
            <div className="Rate">
                <div className="main">
                    <p className="P1"><em>“Best “Safarimoon” we could’ve ever asked for!!!”</em></p>
                    <p className="P2">My recent experience with Niarra (November 2023) was absolutely incredible. Charlie and Savanna were so helpful and excited for us from the very beginning, from helping us stay at the most amazing hotels to recommending nearby must-try restaurants an...</p>
                    <div><img src={Rating} alt="Rating" /> </div>
                    <p className="P3"  style={{fontSize:'12px',color:'grey'}}>Published Saturday, January 13, 2024 on Trustpilot</p>
                    <p className="P4"  style={{fontSize:'12px' ,fontWeight:'bold'}}>ERICA GARCIA</p>
                </div>
            </div>
        </>
    )
}
export default Rate;