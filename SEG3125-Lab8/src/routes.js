import Home from './Components/Home';
import Gallery from './Components/Gallery';
import CreatePost from './Components/CreatePost';
import Profile from './Components/Profile';
import Settings from './Components/Settings';

// Used to assist navbar in directing to selected pages

const routes = [
    {path: '/home', component: <Home />},
    {path: '/gallery', component: <Gallery />},
    {path: '/createPost', component: <CreatePost />},
    {path: '/profile', component: <Profile />},
    {path: '/settings', component: <Settings />}
]

export default routes;