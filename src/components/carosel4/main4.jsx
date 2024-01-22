import React from "react";

import AfricaFree from '../../assets/image/africaFree.svg';
import { CiLocationOn } from "react-icons/ci";
import './main4.css';

const Main4 = () =>{
    return(
        <>
            <div className="main4">
                <div className="section">
                    <div className="content">
                        
                        <div><img src={AfricaFree} alt="logo" width={'280px'} height={'280px'} style={{color:'white',filter:'revert'}} /></div>
                            <p>I WANT TO EXPLORE</p>
                            <h2>AFRICA</h2>
                            <button>Discover me</button>
                        
                        <div style={{marginRight:'1100px',fontWeight:'bold',height:'200px',display: 'flex',alignContent:'center',flexWrap:'wrap',alignItems:'center'}}>
                            <span>{<CiLocationOn/>}</span><h1 style={{color:'white'}}>Borana, Kenya</h1>
                        </div>
                    </div>
                </div>
                
            </div>
        </>
    )
}
export default Main4;