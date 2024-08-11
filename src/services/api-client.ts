import axios from "axios";


export default axios.create({
    baseURL: 'https://fakestoreapi.com'
})


// fetch("https://fakestoreapi.com/products")
//   .then((res) => res.json())
//   .then((json) => console.log(json));