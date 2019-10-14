import Dashboard from './views/Dashboard';
import UserProfile from './views/UserProfile';
import Notifications from './views/Notifications';
import Upgrade from './views/Upgrade';

const dashboardRoutes = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    icon: 'pe-7s-graph',
    component: Dashboard,
    layout: '/admin',
  },
  {
    path: '/user',
    name: 'User Profile',
    icon: 'pe-7s-user',
    component: UserProfile,
    layout: '/admin',
  },
  {
    path: '/notifications',
    name: 'Notifications',
    icon: 'pe-7s-bell',
    component: Notifications,
    layout: '/admin',
  },
  {
    upgrade: true,
    path: '/upgrade',
    name: 'Upgrade to PRO',
    icon: 'pe-7s-rocket',
    component: Upgrade,
    layout: '/admin',
  },
];

export default dashboardRoutes;
