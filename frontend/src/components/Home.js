import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { client } from '../client';
import './Home.css';

const Home = () => {
  const [home, setHome] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    client.fetch('*[_type == "home"][0]')
      .then((data) => {
        setHome(data);
        setLoading(false);
      })
      .catch(console.error);
  }, []);

  if (loading) return <div className="loading">Loading...</div>;

  return (
    <div className="home">
      <div className="banner">
        {home.bannerImage && (
          <img 
            src={`https://cdn.sanity.io/images/your-project-id/production/${home.bannerImage.asset._ref.replace('image-', '').replace('-jpg', '.jpg')}`} 
            alt="Banner" 
          />
        )}
        <div className="banner-content">
          <h1>{home.title}</h1>
          <p>{home.description}</p>
          <Link to="/laptops" className="cta-button">Shop Now</Link>
        </div>
      </div>
      
      <section className="home-features">
        <div className="feature">
          <i className="fas fa-shipping-fast"></i>
          <h3>Fast Shipping</h3>
          <p>Get your laptop delivered in 2-3 business days</p>
        </div>
        <div className="feature">
          <i className="fas fa-shield-alt"></i>
          <h3>Warranty</h3>
          <p>All laptops come with manufacturer warranty</p>
        </div>
        <div className="feature">
          <i className="fas fa-headset"></i>
          <h3>24/7 Support</h3>
          <p>Our tech support is always available</p>
        </div>
      </section>
    </div>
  );
};

export default Home;