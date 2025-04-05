import React from 'react'
import FormPage from './FormPage'
import ThankyouPage from './ThankyouPage'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

export default function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <FormPage />
    },
    {
      path: '/thankyou',
      element: <ThankyouPage />
    }

  ])
  return (
    <RouterProvider router={router} />
  )
}
