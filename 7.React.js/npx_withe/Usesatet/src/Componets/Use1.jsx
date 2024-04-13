import React, { useState, useEffect } from 'react';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Fetching product data from API
        const response = await fetch('https://api.example.com/products');
        const data = await response.json();
        // Assuming data is an array of products
        setProducts(data.slice(0, 20)); // Displaying only the first 20 products
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    // Calling the fetchProducts function when the component mounts
    fetchProducts();
  }, []); // Empty dependency array means this effect runs only once, on component mount

  return (
    <div className="product-list">
      {products.map(product => (
        <div className="product-card" key={product.id}>
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>{product.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
