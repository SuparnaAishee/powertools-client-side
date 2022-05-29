import React, { useEffect, useState } from "react";

const Review = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/review`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  // console.log(reviews);

  return (
    <div className="mt-20">
      <h1 className="text-2xl text-orange-400 font-bold text-center my-3 ">
        {" "}
        Client Review
      </h1>
      <div className=" mx-20 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 ">
        {reviews?.map((review) => (
          <div className="my-5 bg-primary p-6 w-80  rounded-lg  shadow-lg ">
            <h1 className="py-3 text-xl ">
              <b>Client Name:</b> {review.name}{" "}
            </h1>
            <p>
              <b>Review: </b>
              {review.comment}{" "}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Review;
