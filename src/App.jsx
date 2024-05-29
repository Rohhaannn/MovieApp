import React, { useState } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom' 
import Home from './components/Home/Home';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import PageNotFound from './components/PageNotFound/PageNotFound';
import MovieDetails from './components/MovieDetails/MovieDetails';

import './App.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='app'>
        <Router>
          <Header/>
          <Route path='/' Component={Home}/>
          <Route path='/movie/:imdbID' Component={MovieDetails}/>
          <Route Component={PageNotFound}/>
          <Footer/>
        </Router>
      </div>
      // video till : 17:09
    </>
  )
}

export default App
