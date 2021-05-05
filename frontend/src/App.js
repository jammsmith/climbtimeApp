import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';

import Home from './routes/Home';
import CompOverview from './routes/CompOverview';
import LogAttempt from './routes/LogAttempt';
import MyScorecards from './routes/MyScorecards';

function App() {
	return (
		<Router>
			<Navbar />
			<main>
				<Switch>
					<Route exact path='/' component={Home} />
					<Route path='/comp-overview' component={CompOverview} />
					<Route path='/log-attempt' component={LogAttempt} />
					<Route path='/my-scorecards' component={MyScorecards} />
				</Switch>
			</main>
		</Router>
	);
}

export default App;
