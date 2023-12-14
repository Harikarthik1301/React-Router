import React from 'react'
import { Link, useParams } from 'react-router-dom'

const ProductDetails = () => {
    const params = useParams();
  return (
    <div><h1>ProductDetails</h1>
    <p>{params.productId}</p>
    <Link to=".." relative='path' >Back</Link></div>
  )
}

export default ProductDetails