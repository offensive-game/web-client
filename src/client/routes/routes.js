import Home from '../home/components/home/Home';
import Account from '../account/pages/Account/Account';

const routes = [
  {
    path: '/',
    component: Home,
    exact: true,
    key: 'home',
    protected: true
  },
  {
    path: '/account',
    component: Account,
    exact: true,
    key: 'signup'
  }
];

export default routes;
