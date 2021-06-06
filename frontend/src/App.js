import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import BackgroundShadow from './components/BackgroundShadow/BackgroundShadow';

import Home from './routes/Home';
import LoginOrRegister from './routes/LoginOrRegister';
import CompOverview from './routes/CompOverview';
import LogAttempt from './routes/LogAttempt';
import MyScorecards from './routes/MyScorecards';

import UserContext from './context/UserContext';

function App () {
  // Small screen menu toggle -->
  const [menuInView, setMenuInView] = useState(false);

  const toggleHandler = () => setMenuInView(prevValue => !prevValue);
  const closeMenu = () => setMenuInView(false);

  let sideDrawer;
  let backgroundShadow;

  if (menuInView) {
    sideDrawer = (
      <SideDrawer show={menuInView} handleDrawerLinkClick={closeMenu} />
    );
    backgroundShadow = <BackgroundShadow handleBackgroundClick={closeMenu} />;
  }

  //
  //
  // Update logged in user context -->
  const loggedInUser = {
    firstName: 'Admin',
    lastName: 'User',
    userName: 'admin-user',
    email: 'test@admin.com',
    password: 'xxxx',
    isAdmin: true
  };

  return (
    <Router>
      <UserContext.Provider value={loggedInUser}>
        <Navbar handleToggleClick={toggleHandler} />
        {sideDrawer}
        {backgroundShadow}
        <main>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/sign-in' component={LoginOrRegister} />
            <Route path='/competitions/:id' component={CompOverview} />
            <Route path='/log-attempt' component={LogAttempt} />
            <Route path='/my-scorecards' component={MyScorecards} />
          </Switch>
        </main>
      </UserContext.Provider>
    </Router>
  );
}

export default App;
