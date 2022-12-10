import React from "react";
import { useNavigate } from "react-router-dom";
import StarRatings from "react-star-ratings";
import { useLocation } from "react-router-dom";
import defaultAuthor from "../../Images/defaultAuthor.jpg";

import "./Card.css";

const Card = () => {
  const { state } = useLocation();

  console.log(state);

  const navigate = useNavigate();

  return (
    <>
      <div className="card-wrapper">
        {state
          .sort(function (a, b) {
            return (
              new Date(b.volumeInfo.publishedDate) -
              new Date(a.volumeInfo.publishedDate)
            );
          })
          .map((item) => {
            let thumbnail =
              item.volumeInfo.imageLinks &&
              item.volumeInfo.imageLinks.smallThumbnail;
            {
              return (
                <>
                  <div
                    className="card-container"
                    item={state.id}
                    onClick={() => {
                      navigate("embeddedviewer", { state: item });
                    }}
                  >
                    <div className="image-container">
                      {thumbnail ? (
                        <img
                          src={thumbnail}
                          alt="book"
                          className="img-card-author"
                        />
                      ) : (
                        <img
                          src={defaultAuthor}
                          alt="book"
                          className="img-card-author"
                        />
                      )}
                    </div>

                    <div className="card-content">
                      <div className="card-title">{item.volumeInfo.title}</div>
                      <div className="author">{item.volumeInfo.authors}</div>
                      <div className="dates">
                        {item.volumeInfo.publishedDate}
                      </div>
                    </div>

                    <div className="cards-rating">
                      <StarRatings
                        rating={item.volumeInfo.averageRating}
                        starRatedColor="#ffe234"
                        changeRating={item.volumeInfo.averageRating}
                        numberOfStars={5}
                        name="rating"
                        starDimension="20px"
                        starSpacing="2px"
                      />
                    </div>
                  </div>
                </>
              );
            }
          })}
      </div>
    </>
  );
};

export default Card;
