import React from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css';
import { FaHome, FaBars } from 'react-icons/fa';

const Navbar = (props) => {
	return (
		<header className='navbar'>
			<nav className='navbar__navigation'>
				<div className='navbar__goHome'>
					<Link className='navbar__goHome--link' to='/'>
						<FaHome size={25} />
					</Link>
				</div>
				<div className='navbar__spacer'></div>
				<div className='navbar__navigation--items'>
					<ul>
						<li>
							<Link className='link' to='/comp-overview'>
								Comp Overview
							</Link>
						</li>
						<li>
							<Link className='link' to='/my-scorecards'>
								My Scorecards
							</Link>
						</li>
					</ul>
				</div>
				<FaBars
					className='navbar__toggler'
					size={25}
					onClick={props.toggleClicked}
				/>
			</nav>
		</header>
	);
};

export default Navbar;
