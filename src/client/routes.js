import Home from './home/components/home/Home';
import Signup from './signup/components/Signup';

const routes = [
  {
    path: '/',
    component: Home,
    exact: true,
    key: 'home'
  },
  {
    path: '/signup',
    component: Signup,
    exact: true,
    key: 'signup'
  }
];

export default routes;
