import Home from './Components/Home';
import Gallery from './Components/Gallery';
import Post from './Components/Post';
import Profile from './Components/Profile';
import Settings from './Components/Settings';

// Used to assist navbar in directing to selected pages

const routes = [
    {path: '/home', component: <Home />},
    {path: '/gallery', component: <Gallery />},
    {path: '/post', component: <Post />},
    {path: '/profile', component: <Profile />},
    {path: '/settings', component: <Settings />}
]

export default routes;