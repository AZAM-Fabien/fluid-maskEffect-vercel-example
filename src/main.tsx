import React from 'react';
import ReactDOM from 'react-dom/client';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Layout from './pages/Layout';
import Example1Mask from './pages/Example1Mask';
import Example2NoMask from './pages/Example2NoMask';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            { path: '/', element: <Example1Mask /> },
            { path: '/example1MAsk', element: <Example1Mask /> },
            { path: '/example2NoMask', element: <Example2NoMask /> },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
);
