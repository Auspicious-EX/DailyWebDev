import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Login from './components/Login'
import About from './components/About'
import User from './components/User'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar /><Home /></>,
    },
    {
      path: "/login",
      element: <><Navbar /><Login /></>,
    },
    {
      path: "/about",
      element: <><Navbar /><About /></>,
    },
    {
      path: "/user/:username",
      element: <><Navbar /><User /></>,
    },
    // Add a catch-all route for 404 Not Found
    {
      path: "*",
      element: <><Navbar /><h1>404 Not Found</h1></>,
    },
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
