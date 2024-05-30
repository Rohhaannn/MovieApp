import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'

import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom' 
import Home from './components/Home/Home';
import PageNotFound from './components/PageNotFound/PageNotFound';
import MovieDetails from './components/MovieDetails/MovieDetails';
import Layout from './Layout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='/' element={<Home/>}/>
      <Route path='/movie/:imdbID' element={<MovieDetails/>}/>
      <Route path='*' element={<PageNotFound/>}/>
    </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
