import './Review.css'
import React from "react";
import ReactStars from "react-rating-stars-component";
const Review = ({ review }) => {
  const { user, rating, note } = review;
  return (
    <div className="col">
      <div className="card h-100 review-card">
        <div className="card-body">
          <ReactStars
            count={5}
            size={24}
            edit={false}
            value={rating}
            activeColor="#ffd700"
          />

          <blockquote className="blockquote mb-0">
            <p> {note}</p>
            <footer className="blockquote-footer">
              <cite title="Source Title">{user}</cite>
            </footer>
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default Review;
