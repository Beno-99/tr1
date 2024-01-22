import React from "react";

import './main6.css';

import { IoIosArrowForward } from "react-icons/io";


import Fire from '../../assets/image/fire.webp';
import Sea from '../../assets/image/sea.webp';

const Main6 = () =>{
    return(
        <>
            <div id="main6">
                <div id="title" style={{display:'flex',justifyContent:'center',textAlign:'center'}}>
                    <p style={{fontWeight:'bold'}}>GET A GLIMPSE OF WHAT YOU CAN EXPERIENCE</p>
                    <p style={{fontFamily:'Playfair-Display-Medium', fontSize: '72px'}}>Inspiring </p>
                    <p style={{fontFamily:'Playfair-Display-Medium',fontSize: '72px'}}><em>stories</em></p>
                </div>
                <div id="images">
                    <div id="image1"className="image">
                        <img src={Fire} alt="image" />
                        <h2>How to choose a <em>responsible</em> tour operator</h2>
                        <p style={{color:'#fc6220'}}>ABOUT NIARRA TRAVEL</p>
                        <button><hr/> <span>READ STORY</span><span>{<IoIosArrowForward/>}</span></button>
                    </div>
                    <div id="image2"className="image">
                    <img src={Sea} alt="image" width={'350px'} height={'300px'}/>
                        <h2>Why the travel industry needs greater <em>transparency</em></h2>
                        <p style={{color:'#b1b886'}} >ABOUT NIARRA TRAVEL</p>
                        <button><hr/> <span>READ STORY</span><span>{<IoIosArrowForward/>}</span></button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Main6;