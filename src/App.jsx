import React from 'react'
import Middle from './Middle/Middle'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout/Layout'
import About from './About/About'
import Portfolio from './Portfolio/Portfolio'
import Contact from './Contact/Contact'

export default function App() {
  let x = createBrowserRouter([{
    path: "", element: <Layout />, children: [
      { index: true, element: <Middle /> },
      { path: "about", element: <About /> },
      { path: "portfolio", element: <Portfolio /> },
      { path: "contact", element: <Contact /> }
    ]
  }])

  return (
    <div>
      <RouterProvider router={x} />
    </div>
  )
}


