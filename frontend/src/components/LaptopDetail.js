// src/components/LaptopDetail.js
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { client } from '../client';
import { urlFor } from '../utils/imageUrl';
import './LaptopDetail.css';

const LaptopDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [laptop, setLaptop] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    client.fetch(`
      *[_type == "laptops" && _id == $id][0]{
        _id,
        name,
        price,
        description,
        stock,
        image,
        "brand": brand->name,
        "brandLogo": brand->logo
      }
    `, { id })
      .then((data) => {
        setLaptop(data);
        setLoading(false);
      })
      .catch(console.error);
  }, [id]);

  if (loading) return <div className="loading">Loading...</div>;
  if (!laptop) return <div className="not-found">Laptop not found</div>;

  return (
    <div className="laptop-detail-container">
      <button className="back-button" onClick={() => navigate(-1)}>
        <i className="fas fa-arrow-left"></i> Back to Laptops
      </button>
      
      <div className="laptop-detail">
        <div className="laptop-detail-image">
          {laptop.image && (
            <img src={urlFor(laptop.image).width(500).url()} alt={laptop.name} />
          )}
        </div>
        
        <div className="laptop-detail-info">
          <div className="laptop-detail-header">
            <h1>{laptop.name}</h1>
            <div className="brand-info">
              {laptop.brandLogo && (
                <img src={urlFor(laptop.brandLogo).width(80).url()} alt={laptop.brand} className="brand-logo" />
              )}
              <span>{laptop.brand}</span>
            </div>
          </div>
          
          <div className="laptop-detail-price">
            <h2>${laptop.price}</h2>
            <span className={laptop.stock > 0 ? "in-stock" : "out-of-stock"}>
              {laptop.stock > 0 ? `In Stock (${laptop.stock} available)` : "Out of Stock"}
            </span>
          </div>
          
          <div className="laptop-detail-description">
            <h3>Description</h3>
            <p>{laptop.description}</p>
          </div>
          
          <div className="laptop-detail-actions">
            <button className="add-to-cart" disabled={laptop.stock <= 0}>
              <i className="fas fa-shopping-cart"></i> Add to Cart
            </button>
            <button className="buy-now" disabled={laptop.stock <= 0}>
              <i className="fas fa-bolt"></i> Buy Now
            </button>
          </div>
          
          <div className="laptop-detail-features">
            <h3>Key Features</h3>
            <ul>
              <li><i className="fas fa-check"></i> Free Shipping</li>
              <li><i className="fas fa-check"></i> 30-Day Money Back Guarantee</li>
              <li><i className="fas fa-check"></i> 1 Year Warranty</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LaptopDetail;