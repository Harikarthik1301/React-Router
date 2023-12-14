import React from 'react'
import { Link } from 'react-router-dom';

const Products = [
{id:'p1', title : "Product -1"},
{id:'p2', title : "Product -2"},
{id:'p3', title : "Product -3"},
];
const Product = () => {
  return (
    <div>
        <h1>Product Page</h1>
        <ul>
        {Products.map((product) =>(
            <li id={product.id}>
                <Link to= {`/product/${product.id}`}>{product.title}</Link>
            </li>
        ))}
        </ul>
    </div>
  )
}

export default Product