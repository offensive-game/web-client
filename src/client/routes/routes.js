import Home from '../home/pages/Home/Container';
import Account from '../account/pages/Account/Container';

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
