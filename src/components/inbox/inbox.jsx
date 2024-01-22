import React from "react";

import Mountain from '../../assets/image/mountain.webp';
import Cloud from '../../assets/image/footer-clouds.png';

import './inbox.css';

const Inbox = () =>{
    return(
        <>
            <div className="footer">
                <img  src={Mountain}  width={'100%'} height={'100%'} alt="mountain" />
                <div className="cloud"><img src={Cloud} alt="cloud" width={'1550px'} height={'100%'} /></div>

                    <div className="div-form">
                        <h3>THE WORLD IS AT YOUR FEET</h3>
                        <h2>Receive <em>inspiration</em> in your inbox</h2>
                        <form className="form">
                            <input type="text" placeholder="First Name" />
                            <input type="text" placeholder="Last Name" />
                            <input type='email' placeholder="E-mail" />
                            <div style={{width:'203px',display:'flex',textAlign:'left'}}>
                                <input type="radio" />
                                <span style={{fontSize:'14px'}}>I'm happy to receive emails from Niarra Travel *</span>
                            </div>
                            <button>Subscribe</button>
                        </form>
                    </div>
                
            </div>
        </>
    )
}
export default Inbox;