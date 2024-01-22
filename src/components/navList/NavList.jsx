import React from "react";

import './NavList.css';

const NavList = (props) =>{

	const {
		title,

	} = props

    return(
    <>
			<li>
				<button>{title}</button>
			</li>
		</>
    )
    
}
export default NavList;