export const fetchProducts = async () => {
    return await fetch('http://localhost:5000/api/products/').then(data => data.json())
}

 