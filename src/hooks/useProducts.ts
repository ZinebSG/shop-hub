import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface product{
    id: number,
    title: string,
}

const useProducts = () => {
    const [products, setProducts] = useState<product[]>([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const controller = new AbortController();

        apiClient.get<product[]>('/products')
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