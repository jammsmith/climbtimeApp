import React from 'react';
import { Link } from 'react-router-dom';

import HRule from '../HRule';
import './SideDrawer.css';

const SideDrawer = (props) => {
	let drawerClasses = 'side-drawer';

	if (props.show) {
		drawerClasses = 'side-drawer show';
	}

	return (
		<nav className={drawerClasses}>
			<ul className='side-drawer__items'>
				<li>
					<Link
						className='side-drawer__items--link'
						to='/'
						onClick={props.drawerLinkClick}>
						My Competitions
					</Link>
				</li>
				<HRule />
				<li>
					<Link
						className='side-drawer__items--link'
						to='/my-profile'
						onClick={props.drawerLinkClick}>
						My Profile
					</Link>
				</li>
				<li>
					<Link
						className='side-drawer__items--link'
						to='/my-profile'
						onClick={props.drawerLinkClick}>
						Log Out
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default SideDrawer;
