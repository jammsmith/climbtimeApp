import React from 'react';
import { FaHome } from 'react-icons/fa';

import {
	NavbarContainer,
	NavbarNavigation,
	NavbarHomeLink,
	NavbarSpacer,
	NavbarLinksContainer,
	NavbarLinkList,
	NavbarLinkItem,
	NavbarLink,
	NavbarToggleIcon,
} from './NavbarElements';

const Navbar = (props) => {
	return (
		<NavbarContainer>
			<NavbarNavigation>
				<div>
					<NavbarHomeLink to='/'>
						<FaHome size={25} />
					</NavbarHomeLink>
				</div>
				<NavbarSpacer />
				<NavbarLinksContainer>
					<NavbarLinkList>
						<NavbarLinkItem>
							<NavbarLink className='link' to='/comp-overview'>
								Comp Overview
							</NavbarLink>
						</NavbarLinkItem>
						<NavbarLinkItem>
							<NavbarLink className='link' to='/my-scorecards'>
								My Scorecards
							</NavbarLink>
						</NavbarLinkItem>
					</NavbarLinkList>
				</NavbarLinksContainer>
				<NavbarToggleIcon size={25} onClick={props.toggleClicked} />
			</NavbarNavigation>
		</NavbarContainer>
	);
};

export default Navbar;
