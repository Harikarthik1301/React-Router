import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import HomePage from './pages/HomePage';
import Product from './pages/Product';
import RootLayout from './components/RootLayout';
import ErrorPage from './components/ErrorPage';
import ProductDetails from './pages/ProductDetails';


const router = createBrowserRouter([
  {path : '/', element : <RootLayout/>,
  errorElement:<ErrorPage/>,
    children :[
      {path : '/',element: <HomePage />},
      {path : '/product',element: <Product/>},
      {path : '/product/:productId',element: <ProductDetails/>},
    ]}
])

function App() {
  return <RouterProvider router = {router}/>;
}

export default App;
