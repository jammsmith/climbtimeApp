import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import BackgroundShadow from './components/BackgroundShadow/BackgroundShadow';

import Home from './routes/Home';
import CompOverview from './routes/CompOverview';
import LogAttempt from './routes/LogAttempt';
import MyScorecards from './routes/MyScorecards';

function App() {
	// Small screen menu toggle
	const [menuInView, setMenuInView] = useState(false);

	const toggleHandler = () => {
		return setMenuInView((prevValue) => !prevValue);
	};

	const closeMenu = () => setMenuInView(false);

	let sideDrawer;
	let backgroundShadow;

	if (menuInView) {
		sideDrawer = <SideDrawer show={menuInView} drawerLinkClick={closeMenu} />;
		backgroundShadow = <BackgroundShadow backgroundClicked={closeMenu} />;
	}

	//

	return (
		<Router>
			<Navbar toggleClicked={toggleHandler} />
			{sideDrawer}
			{backgroundShadow}
			<main>
				<Switch>
					<Route exact path='/' component={Home} />
					<Route path='/competitions/:id' component={CompOverview} />
					<Route path='/log-attempt' component={LogAttempt} />
					<Route path='/my-scorecards' component={MyScorecards} />
				</Switch>
			</main>
		</Router>
	);
}

export default App;
