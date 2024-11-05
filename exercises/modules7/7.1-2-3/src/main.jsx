import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from 'components/Pages/HomePage.jsx'
import MovieListPage from 'components/Pages/MovieListPage.jsx'
import CinemaPage from 'components/Pages/CinemaPage.jsx'
import App from 'components/App/App.jsx'
import AddMoviePage from 'components/Pages/AddMoviePage'
import MoviePage from 'components/Pages/MoviePage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [ 
      {
        path: '',
        element: <HomePage />,
      },
      {
        path: 'movies',
        element: <MovieListPage />,
      },
      {
        path: 'cinemas',
        element: <CinemaPage />,
      },
      {
        path: 'addMovie',
        element: <AddMoviePage />,
      },
      {
        path: 'movie/:movieId',
        element: <MoviePage />,
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
