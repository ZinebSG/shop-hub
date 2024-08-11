import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

const useGenres = () => {
    const [genres, setGenres] = useState<string[]>([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const controller = new AbortController();

        apiClient.get<string[]>('/products/categories')
        .then(res => setGenres(res.data))
        .catch(err => { 
            if(err instanceof CanceledError ) return;
            setError(err.message)
        });

    return () => controller.abort();
    }, []);

    return {genres, error};
}

export default useGenres;