import Home from './Home';
import About from './About';
import Contact from './Contact';

export default [
    {
        path: '/',
        component: Home,
        exact: true
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/contact',
        component: Contact
    }
]
