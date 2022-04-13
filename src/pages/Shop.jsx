import React, {useState, useEffect} from 'react';
import { data } from '../data';
import Product from "../components/Product";
import Loading from "../components/Loading"

const Shop = () => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
      setTimeout(() => {
          setProducts(data);
          setLoading(false)
      }, 500);
    }, [])

  return (
    <div className='shopContainer'>
        <h1 className='title'>Shop</h1>
        <div className="productsContainer">
            {loading ? <Loading/> : products.map(product => <Product key={product.id} product={product}/>) }
        </div>
    </div>
  )
}

export default Shop