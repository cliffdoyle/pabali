
// src/components/Reviews.js
import React, { useState, useEffect } from 'react';
import { client } from '../client';
import './Reviews.css';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    client.fetch('*[_type == "reviews"]')
      .then((data) => {
        setReviews(data);
        setLoading(false);
      })
      .catch(console.error);
  }, []);

  if (loading) return <div className="loading">Loading...</div>;

  return (
    <div className="reviews-container">
      <h1>Customer Reviews</h1>
      
      <div className="reviews-grid">
        {reviews.map((review) => (
          <div key={review._id} className="review-card">
            <div className="review-header">
              <h3>{review.name}</h3>
              <div className="rating">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className={i < review.rating ? "star filled" : "star"}>★</span>
                ))}
              </div>
            </div>
            <p className="review-text">{review.review}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;