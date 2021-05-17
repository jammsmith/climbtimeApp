import React from 'react';

import {
	DrawerNav,
	DrawerItems,
	LinkItem,
	DrawerLink,
	Divider,
} from './SideDrawerElements';

const SideDrawer = (props) => {
	return (
		<DrawerNav>
			<DrawerItems>
				<LinkItem>
					<DrawerLink to='/' onClick={props.drawerLinkClick}>
						My Competitions
					</DrawerLink>
				</LinkItem>
				<Divider />
				<LinkItem>
					<DrawerLink to='/my-profile' onClick={props.drawerLinkClick}>
						My Profile
					</DrawerLink>
				</LinkItem>
				<LinkItem>
					<DrawerLink to='/' onClick={props.drawerLinkClick}>
						Log Out
					</DrawerLink>
				</LinkItem>
			</DrawerItems>
		</DrawerNav>
	);
};

export default SideDrawer;
