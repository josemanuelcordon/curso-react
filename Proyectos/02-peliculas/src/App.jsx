import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './pages/ErrorPage';
import RootMoviesLayout from './pages/RootMoviesLayout';
import Home from './pages/Home';
import MovieDetailsPage from './pages/MovieDetailsPage';

function App() {
  const router = createBrowserRouter(
    [
      {
        path: '/',
        element: <RootMoviesLayout/>,
        errorElement: <ErrorPage/>,
        children: [
          {
            index: true,
            element: <Home/>
          }, 
          {
            path: '/peliculas/:idPelicula',
            element: <MovieDetailsPage/>,
            
          }, 
        ]
      },
    ]
  );
  return <RouterProvider router={router}/>
}

export default App
