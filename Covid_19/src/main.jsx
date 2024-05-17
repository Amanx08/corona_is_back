import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, Router, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Pages/Home.jsx'
import Reports from './components/Pages/Reports.jsx'
import Vaccines from './components/Pages/Vaccines.jsx'
import About from './components/Pages/About.jsx'
import Symptoms from './components/Pages/Symptoms.jsx'
import Contact from './components/Pages/Contact.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element = { <Layout /> } >
        <Route path='' element = { <Home /> } />
        <Route path='/reports' element = { <Reports /> } />
        <Route path='/vaccines' element = {<Vaccines />} />
        <Route path='/about' element = {<About />} />
        <Route path='/symptoms' element = {<Symptoms />} />
        <Route path='/contact' element = {<Contact />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)