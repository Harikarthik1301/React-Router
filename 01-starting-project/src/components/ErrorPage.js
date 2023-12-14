import React from 'react'
import MainNavigation from './MainNavigation'

const ErrorPage = () => {
  return (
    <>
    <MainNavigation/>
     <main>
        <h1>An Error Occurred</h1>
        <p>Could not find the page!!!</p>
     </main>
    </>
  )
}

export default ErrorPage