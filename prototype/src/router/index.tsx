import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../pages/Home';
import Resources from '../pages/Resources';
import Community from '../pages/Community';
import Profile from '../pages/Profile';
import Notification from '../pages/Notification';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/resources',
        element: <Resources />,
      },
      {
        path: '/community',
        element: <Community />,
      },
      {
        path: '/profile',
        element: <Profile />,
      },
      {
        path: '/notification',
        element: <Notification />,
      },
    ],
  },
]);

export default router;