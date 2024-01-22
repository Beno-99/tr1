import React from "react";

import NavBar from "../navBar/NavBar";
import Main from "./main.jsx";

import './carosel.css';


const Carosel = () =>{
    return(
	<>
				
		<div className="carosel" >
			<div className="background">
				<NavBar/>
				<Main/>
			</div>
		</div>
				
	</>
    )
}
export default Carosel;