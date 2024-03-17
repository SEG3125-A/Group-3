import Home from './Components/Home';
import Gallery from './Components/Gallery';
import Profile from './Components/Profile';
import Settings from './Components/Settings';

// Used to assist navbar in directing to selected pages

const routes = [
    {path: '/home', component: <Home />},
    {path: '/gallery', component: <Gallery />},
    {path: '/profile', component: <Profile />},
    {path: '/settings', component: <Settings />}
]

export default routes;