import axios from "axios";
import React, { useEffect, useState } from "react";
import { domain } from "../../../hooks/useDomain";
import Review from "./review/Review";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const getData = async () => {
      await axios.get(`${domain}/reviews`).then((res) => setReviews(res.data));
    };
    getData();
  }, []);
  return (
    <div className="container my-5">
      <h2 className="text-center display-6"> Customer Reviews</h2>
      <hr className="w-25 mx-auto regular-text" />
      <div className="row mx-auto w-100  row-cols-1 justify-content-center row-cols-md-3 g-4">
        {reviews.length === 0 ? (
          <h2 className="display-7 text-center"> No review yet!!</h2>
        ) : (
          reviews.map((review, index) => <Review review={review} key={index} />)
        )}
      </div>
    </div>
  );
};

export default Reviews;
