// src/components/Laptops.js (updated)
import React, { useState, useEffect } from 'react';
import { client } from '../client';
import { urlFor } from '../utils/imageUrl';
import './Laptops.css';

const Laptops = () => {
  const [laptops, setLaptops] = useState([]);
  const [brands, setBrands] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedBrand, setSelectedBrand] = useState('all');

  useEffect(() => {
    // Fetch all laptops with their brand reference
    client.fetch(`
      *[_type == "laptops"]{
        _id,
        name,
        price,
        description,
        stock,
        image,
        "brand": brand->name
      }
    `)
      .then((data) => {
        setLaptops(data);
        setLoading(false);
      })
      .catch(console.error);

    // Fetch all brands
    client.fetch(`*[_type == "brands"]{ _id, name }`)
      .then(setBrands)
      .catch(console.error);
  }, []);

  const filteredLaptops = selectedBrand === 'all' 
    ? laptops 
    : laptops.filter(laptop => laptop.brand === selectedBrand);

  if (loading) return <div className="loading">Loading...</div>;

  return (
    <div className="laptops-container">
      <h1>Our Laptop Collection</h1>
      
      <div className="filter-container">
        <label>Filter by Brand:</label>
        <select 
          value={selectedBrand} 
          onChange={(e) => setSelectedBrand(e.target.value)}
        >
          <option value="all">All Brands</option>
          {brands.map(brand => (
            <option key={brand._id} value={brand.name}>{brand.name}</option>
          ))}
        </select>
      </div>

      <div className="laptops-grid">
        {filteredLaptops.map((laptop) => (
          <div key={laptop._id} className="laptop-card">
            <div className="laptop-image">
              {laptop.image && (
                <img src={urlFor(laptop.image).width(300).height(200).url()} alt={laptop.name} />
              )}
              {laptop.stock <= 5 && laptop.stock > 0 && (
                <span className="stock-badge low">Only {laptop.stock} left!</span>
              )}
              {laptop.stock === 0 && (
                <span className="stock-badge out">Out of Stock</span>
              )}
            </div>
            <div className="laptop-details">
              <h3>{laptop.name}</h3>
              <p className="brand">{laptop.brand}</p>
              <p className="price">${laptop.price}</p>
              <p className="description">{laptop.description ? laptop.description.substring(0, 100) + '...' : 'No description available'}</p>
              <button className="view-details">View Details</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Laptops;