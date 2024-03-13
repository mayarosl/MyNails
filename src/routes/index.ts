import Favorites from '../pages/Favorites';
import History from '../pages/History';
import Login from '../pages/Login';
import Main from '../pages/Main';

export interface IRoute {
    path: string;
    element: React.ComponentType;
    exact?: boolean;
}

export const publicRoutes: IRoute[] = [
    {
        path: '/login',
        element: Login,
        exact: true,
    },
];

export const privateRoutes: IRoute[] = [
    {
        path: '/',
        element: Main,
        exact: true,
    },
    {
        path: '/history',
        element: History,
        exact: true,
    },
    {
        path: '/favorites',
        element: Favorites,
        exact: true,
    },
];
