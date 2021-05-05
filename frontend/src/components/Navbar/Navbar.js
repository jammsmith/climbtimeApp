import React from 'react';
import {
	Nav,
	NavLink,
	Bars,
	NavMenu,
	NavBtn,
	NavBtnLink,
} from './NavbarElements';

const Navbar = () => {
	return (
		<Nav>
			<NavLink to='/'>ClimbTime</NavLink>
			<Bars />
			<NavMenu>
				<NavLink to='/my-competitions'>My Competitions</NavLink>
				<NavLink to='/comp-overview'>Comp Overview</NavLink>
				<NavLink to='/log-attempt'>Add to Scorecard</NavLink>
				<NavLink to='/my-scorecards'>My Scorecards</NavLink>
			</NavMenu>
			<NavBtn>
				<NavBtnLink to='/sign-in'>Sign In</NavBtnLink>
				<NavBtnLink to='/sign-up'>Sign Up!</NavBtnLink>
			</NavBtn>
		</Nav>
	);
};

export default Navbar;
