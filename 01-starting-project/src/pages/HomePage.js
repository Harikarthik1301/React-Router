import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <>
       <h1>HomePage</h1>
       <Link to = "/product">Go to product page</Link>
       </>
 
  )
}

export default HomePage