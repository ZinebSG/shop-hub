import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Product{
    id: number,
    title: string,
    image: string,
    category: string,
    price: number,
}

const useProducts = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const controller = new AbortController();

        apiClient.get<Product[]>('/products')
        .then(res => setProducts(res.data))
        .catch(err => { 
            if(err instanceof CanceledError ) return;
            setError(err.message)
        });

    return () => controller.abort();
    }, []);

    return {products, error};
}

export default useProducts;