import React from "react";

import Slide1 from '../../assets/image/slide1.jpg';
import Slide2 from '../../assets/image/slide2.jpg';

import Cards from "./cards.jsx";
import './slide.css';

const Slide = () =>{
    return(
        <>
            <div className="slide">
                <div className="text">
                    <h3>Example trips</h3>
                    <h2>Get inspired</h2>
                    <p>Browse our example trips and get in contact 
                        to start planning your very own adventure.</p>
                </div>
                <div className="slideShow">
                    <Cards
                        href='/'
                        title='AFRICA'
                        text1='11-Day Trip'
                        text2='Cape,Wine,Wildlife and Waterfalls.'
                        text3='This is the perfect first-time trip to South Africa, 
                            showcasing the very best of the Rainbow Nation before a spectacular finale by Victoria Falls.. '
                        price='3400 PP'
                        image={Slide1}
                    />
                    <Cards
                        href='/'
                        title='AFRICA'
                        text1='11-Day Trip'
                        em='Conservation '
                        text2='and Culture in Kenya'
                        text3='Experience the best of Kenyas wildlife, conservation efforts and some of the most iconic hotels '
                        price='5300 PP'
                        image={Slide2}
                    />
                    
                </div>
            </div>
        </>
    )
}
export default Slide;