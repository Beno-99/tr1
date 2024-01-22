import React from "react";

import './main2.css';

import { LiaMapMarkedAltSolid } from "react-icons/lia";
import { TfiWorld } from "react-icons/tfi";
import { MdOutlineGroups } from "react-icons/md";

import Elephant from '../../assets/image/Elephant.jpg';
import Singita from '../../assets/image/Singita.jpg';

const Main2 = () =>{
    return(
        <>
            <div >
                <div className="main2">
                    <div className="div1">
                        <div className="icons1">
                            <div className="icon" style={{display:'flex',justifyContent:'center'}}>
                                <LiaMapMarkedAltSolid/>
                            </div>
                            <p className="text1" style={{fontFamily:'Playfair-Display-Medium'}} >Unforgettable experiences</p>
                            <p className="text2" >Creating your trip is entirely collaborative and our Travel Researchers are here for every step.</p>
                        </div>
                        <div className="icons2" >
                            <div className="icon" style={{display:'flex',justifyContent:'center'}}>
                                <TfiWorld/>
                            </div>
                            <p className="text1" style={{fontFamily:'Playfair-Display-Medium'}} >Positive impact</p>
                            <p className="text2"  >Curated sustainable experiences and accommodation that maximize the benefits to local people and place.</p>
                        </div>
                        <div className="icons3">
                            <div className="icon" style={{display:'flex',justifyContent:'center'}}>
                                <MdOutlineGroups/>
                            </div>
                            <p className="text1" style={{fontFamily:'Playfair-Display-Medium',textAlign:'center'}} >Fairness and transparency</p>
                            <p className="text2"  >An open, competitive pricing structure that ensures more money goes to where it's needed in the destination.</p>
                        </div>
                    </div>
                    <div className="div2">
                        <p className="p2-1" style={{fontFamily:'basetica-medium',color:'white'}}>
                            WHAT MAKES US DIFFERENT
                        </p>
                        <p className="p2-2"  style={{fontFamily:'Playfair-Display-Medium',color:'white'}} >
                            Why Niarra
                        </p>
                        <div  className="images">
                            <div className="img1 img">
                                <img src={Elephant}   />
                            </div>
                            <div className="img2 img" >
                                <img src={Singita}/>
                            </div>
                        </div>
                        
                    </div>
                    <div className="div3">
                        <p>
                        Niarra Travel is a forward-thinking travel company headquartered in London born out of 
                        a passion to do things differently.
                        </p>
                        <p>
                        In Swahili, a Bantu language spoken by millions in Eastern, Central and Southern Africa,
                        the name Niara means "with utmost purpose" and our team are united by a passion for exploration and a belief that the right kind of travel can make the world a better place.
                        </p>
                        <p>
                        In Swahili, a Bantu language spoken by millions in Eastern, Central and Southern Africa,
                        the name Niara means "with utmost purpose" and our team are united by a passion for exploration and a belief that the right kind of travel can make the world a better place.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Main2;