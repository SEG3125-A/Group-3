import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import HeadNavBar from './Components/HeadNavBar';
import routes from './routes';
import './App.css';
import Home from './Components/Home';

// The main running file
// All page content materials created using react are to be imported and utilized here
// App.js is to be called in the Index.js file, connecting our React components to the DOM

function App() {
  return (
    // Below establishes the navbar component and uses the Router library to route user selection to correct page
    <div>
      <Router>
        <HeadNavBar />
        <div className="container mt-4">
          <Routes>
            <Route index element={<Home />}/>
            {routes.map((route, index) => (
              <Route key={index} path={route.path} element={route.component} />
            ))}
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
