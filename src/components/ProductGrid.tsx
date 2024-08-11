import { useEffect, useState } from 'react'
import apiClient from '../services/api-client';
import { Text } from '@chakra-ui/react';


interface product{
    id: number,
    title: string,
}


const ProductGrid = () => {
    const [products, setProducts] = useState<product[]>([]);
    const [error, setError] = useState('');

    useEffect(() => {
        apiClient.get<product[]>('/products')
        .then(res => setProducts(res.data))
        .catch(err => setError(err.message));
    })


  return (
    <>
    { error && <Text> {error} </Text> }

    <ul>
        {products.map(product => <li key = {product.id}> {product.title} </li>)}
    </ul>
    </>
  )
}

export default ProductGrid