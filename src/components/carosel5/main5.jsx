import React from "react";

import './main5.css'

import Section1 from '../../assets/image/section1.jpg';
import Section2 from '../../assets/image/section2.jpg';
import Section3 from '../../assets/image/section3.jpg';

const Main5 = ()=>{
    return(
        <>
            <div className="main5">
                    <div className="div1"></div>
                    <div className="div2">
                        <section id="section1" className="section" style={{backgroundImage:`url(${Section3})`,backgroundPosition:'center',backgroundRepeat:'no-repeat',objectFit:'cover'}}>
                            <div><h2>Family travel</h2></div>
                            <div className="action"><p>Luxury family safaris and inspiring wildlife adventures with a positive impact.<div><button>Discover me</button></div></p></div>
                        </section>
                        <section id="section2" className="section" style={{backgroundImage:`url(${Section2})`,backgroundPosition:'center',backgroundRepeat:'no-repeat',objectFit:'cover',margin:'40px'}}>
                            <div>
                                <div className="title">
                                    <p style={{fontSize:'16px',fontWeight:"bold"}}>TRAVEL IN STYLE</p>
                                    <p style={{fontFamily:'Playfair-Display-Medium'}} >Find travel inspiration by </p>
                                    <p><em style={{fontFamily:'Playfair-Display-Medium'}}>style</em></p>
                                </div>
                                <h2>Private travel</h2>
                            </div>
                            <div className="action">Quality time with family and friends, complete flexibility and exclusive use safari camps.<div><button>Discover me</button></div></div>
                        </section>
                        <section id="section3" className="section" style={{backgroundImage:`url(${Section1})`,backgroundPosition:'center',backgroundRepeat:'no-repeat',objectFit:'cover'}}>
                            <div><h2>Honeymoons</h2></div>
                            <div className="action" style={{marginTop:'30px'}} >From guilt-free indulgence to the romance of a real adventure, we can help you plan your perfect honeymoon.<div><button>Discover me</button></div></div>
                        </section>
                    </div>
            </div>
        </>
    )
}
export default Main5;