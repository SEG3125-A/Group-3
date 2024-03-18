import React from 'react';

function Settings({ onLogout }) {
	// Placeholder for a logout function. You should replace it with your actual logout logic
	const handleLogout = () => {
	  // Implement your logout logic here
	  // This could involve clearing local storage, updating React context or Redux store, and redirecting the user
	  console.log('Logging out...');
	  //onLogout(); // Call the passed logout handler, if any
	};
  
	return (
	  <div className="settings-container">
		<h2>Settings</h2>
		<ul className="settings-list">
		  {/* Other settings options can be added here */}
		  <li className="settings-item">
			<button onClick={handleLogout} className="logout-button">Log Out</button>
		  </li>
		</ul>
	  </div>
	);
  }

export default Settings;