import React from "react";

import { MdStar } from "react-icons/md";
import { FaFacebookF, FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


import './footer.css';

const Footer = () =>{
    return(
        <>
            <div className="footer-footer">
                <div className="footer-section1 ">
                        <p>AS SEEN IN</p>
                    <ul>
                        <li><a><img src="https://www.niarratravel.com/content/images/traveler.png"  /></a></li>
                        <li><a><img src="https://www.niarratravel.com/content/images/robb-report.png"  /></a></li>
                        <li><a><img src="https://www.niarratravel.com/content/images/bloomberg.png" /></a></li>
                        <li><a><img src="https://www.niarratravel.com/content/images/forbes.png" /></a></li>
                        <li><a><img src="https://www.niarratravel.com/content/images/afar.png"  /></a></li>
                    </ul>
                </div>
                <hr />
                <div className="footer-section2">
                    <div className="footer-div1">
                        <div style={{paddingBottom:'20px'}}><p>DESTINATIONS</p></div>
                        <div>
                            <ul>
                                <li><a>Africa</a></li>
                                <li><a>Asia</a></li>
                                <li><a>Australia</a></li>
                                <li><a>Europe</a></li>
                                <li><a>Latin America</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer-div2">
                        <div>
                            <p>CALL US</p>
                            <a>+1 (833) 215 9353</a>
                        </div>
                        <div>
                            <p>E-MAIL US</p>
                            <a>explore@niarratravel.com</a>
                        </div>
                    </div>
                    <div className="footer-div3">
                        <a style={{backgroundColor:'white',
                                    color:'black',
                                    fontSize:'14px',
                                    padding:'6px',
                                    borderRadius:'2px'}}><span>Review us on </span><div style={{display:'flex',alignItems:'center',justifyContent:'center'}}><span style={{color:'#00b67a',fontSize:'20px'}}>{<MdStar/>}</span><span style={{fontWeight:'bold'}}>Trustpilot</span></div></a>
                        <div className="logos">
                            <ul>
                                <li><a>{<FaFacebookF/>}</a></li>
                                <li><a><FaInstagram/></a></li>
                                <li><a>{<FaLinkedin/>}</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer-section3">
                    <p>Niarra Travel</p>
                    <ul>
                        <li><a>Terms</a></li>
                        <li><a>Cookie Policy</a></li>
                        <li><a>Privacy Policy</a></li>
                    </ul>
                    <div className="long-run">
                        <img src="https://www.niarratravel.com/content/images/footer/logo/The-Long-Run-logo.png" alt="logo" width={'80px'}height={'80px'}/>
                        <p className="logo" >A proud Travel Partner of <a style={{paddingLeft:'4px'}}> The Long Run</a></p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Footer;