import React = require('react');
import Navigation from './src/navigation';

function App(): JSX.Element {
  return <Navigation />;
}

export default App;

/********** TODO:
 *
 * Check whether the user is alreadt logged in on page setup
 * if logged in the initialRouteName should be Home
 * if not the initialRouteName should be Onboard
 *
 * Another TODO:
 * Move every screen container to safeareaview
 * Then style the status bar
 *
 * Another TODO:
 * For the wallet address on the profile page, truncate to include ... in the middle
 * Add a copy icon
 *
 *
 * Another TODO:
 * Consider adding a see more button in the transactions card in profile
 * This way a user can see more stuff like transaction id, etc
 *
 * **********/
