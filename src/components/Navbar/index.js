import React from 'react';
import {Nav, NavLink, Bars, NavMenu} from './NavbarElements';
import './Navbar.css'

const Navbar = () => {
return (
	<>
     <div className="sticky-nav">
	<Nav>
		<Bars />
		<NavMenu>
		<NavLink to='/' activeStyle>
			Home
		</NavLink>
		{/* <NavLink to='/favorites' activeStyle>
			Favorites
		</NavLink>
		<NavLink to='/deletefavorites' activeStyle>
			Delete Favorites
		</NavLink>
        <NavLink to='/addfavorites' activeStyle>
			Add Favorites
		</NavLink> */}
		</NavMenu>
	</Nav>
    </div>
	</>
);
};

export default Navbar;
