import Game from '../game/pages/Game/Container';
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
  },
  {
    path: '/game/:id',
    component: Game,
    exact: true,
    key: 'game'
  }
];

export default routes;
