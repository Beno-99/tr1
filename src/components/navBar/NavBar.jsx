import React from "react";

import NavList from "../navList/NavList.jsx";

import { GiCompass } from "react-icons/gi";
import { AiOutlineDollar, AiOutlineMenu } from "react-icons/ai";




import './NavBar.css';

const NavBar = () =>{
    return(
        <>
					<div className="nav">
						<div className="word">
							<button>
								<h1>Niarra</h1>
							</button>
						</div>
						<div className="list">
							<ul>
								<NavList
									title='DESTINATIONS '
								/>
								<NavList
									title='TRAVEL STYLES'
								/>
								<NavList
									title='ABOUT US'
								/>
								<NavList
									title='STORIES'
								/>
							</ul>
						</div>
						<div className='nav-menu' style={{color:'white',fontSize:'large'}}><a>ENQUIRE</a><button>{<AiOutlineMenu/>}</button></div>
						<div className="pound">
							
							<span>
								<button >
									<span>
										<AiOutlineDollar style={{padding:'2px',fontSize:'20px', color:'white'}}/>
										<h2 style={{color:'white'}}>USD</h2>
									</span>
								</button>
							</span>
							<span>
								<button className="gicompass">
									<span>
									<GiCompass style={{padding:'2px',fontSize:'20px', color:'white'}}/>
									<h2 style={{color:'white'}}>ENQUIRE </h2>
									</span>
								</button>
							</span>
						</div>
					</div>
        </>
    )
}
export default NavBar;