import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
  const [products, setProducts] = useState([]);
  const [expandedProductId, setExpandedProductId] = useState(null); // Track which product description is expanded

  // Fetch products from Django API
  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/products/')  // Django API endpoint
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the products!', error);
      });
  }, []);

  // Toggle description view
  const toggleDescription = (productId) => {
    setExpandedProductId(expandedProductId === productId ? null : productId);
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center">Featured Products</h1>
      <div className="row">
        {products.map(product => (
          <div className="col-md-3 mb-4" key={product.id}>
            <div className="card shadow-sm border-0 d-flex flex-column" style={{ height: '100%' }}>
              <div className="card-img-container">
                <img 
                  src={`http://127.0.0.1:8000${product.image}`} // Ensure the image URL is correct
                  className="card-img-top" 
                  alt={product.name} 
                  style={{ 
                    width: '100%', 
                    height: 'auto', 
                    objectFit: 'cover' // Ensures the image aspect ratio is maintained
                  }} 
                />
              </div>
              <div className="card-body d-flex flex-column" style={{ flexGrow: 1 }}>
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">
                  {expandedProductId === product.id 
                    ? product.description 
                    : `${product.description.substring(0, 100)}...`} {/* Show only first 100 characters */}
                </p>
                {/* Show 'View More' or 'View Less' based on the state */}
                <button
                  className="btn btn-link p-0"
                  onClick={() => toggleDescription(product.id)}
                >
                  {expandedProductId === product.id ? 'View Less' : 'View More'}
                </button>
                <p className="card-text text-muted"><strong>{`$${product.price}`}</strong></p>
                {/* Add to Cart button positioned at the bottom */}
                <div className="mt-auto">
                  <button className="btn btn-primary w-100">Add to Cart</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
