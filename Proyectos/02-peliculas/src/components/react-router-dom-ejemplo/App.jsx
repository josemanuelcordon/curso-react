import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Inicio from './Inicio'
import User from './User';
import ErrorPage from '../../pages/ErrorPage';
import RootLayout from '../../pages/RootLayout';
import UserDetails from '../../pages/UserDetails';

function App() {
  const router = createBrowserRouter(
    [
      {
        path: '/',
        element: <RootLayout/>,
        errorElement: <ErrorPage/>,
        children: [
          {
            path: '/user',
            element: <User/>,
            
          }, 
          {
            path: '/user/:idUser',
            element: <UserDetails/>,
            
          }, 
        ]
      },
    ]
  );
  return <RouterProvider router={router}/>
}

export default App
