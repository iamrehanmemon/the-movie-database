import React from "react";

import "../trailer/trailer.style.scss";

const Trailer = () => {
  return (
    <div className="container">
      <div className="trailer-header ">
        <span className="title">Latest Trailer</span>
        <div className="custom-select">
          <select>
            <option value="Streaming">Streaming </option>
            <option value="On TV">On TV</option>
            <option selected value="For Rent">
              For Rent
            </option>
            <option value="In Theaters">In Theaters</option>
          </select>
          <span className="custom-arrow"></span>
        </div>
      </div>

      <div className="trailer">
        <div className="card">
          <div className="video__img">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/nfs8NYg7yQM?controls=0"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div className="trailer__body">
            <h3 className="card__name">The Hauting</h3>
            <p className="card__desc">
              The Haunting of Bly Manor | Teaser Trailer | Netflix
            </p>
          </div>
        </div>
        <div className="card">
          <div className="card__img">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/Io0fBr1XBUA?controls=0"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div className="card__body">
            <h3 className="card__name">The Hauting</h3>
            <p className="card__desc">
              The Haunting of Bly Manor | Teaser Trailer | Netflix
            </p>
          </div>
        </div>
        <div className="card">
          <div className="card__img">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/YykjpeuMNEk?controls=0"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div className="card__body">
            <h3 className="card__name">The Hauting</h3>
            <p className="card__desc">
              The Haunting of Bly Manor | Teaser Trailer | Netflix
            </p>
          </div>
        </div>
        <div className="card">
          <div className="card__img">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/YykjpeuMNEk?controls=0"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div className="card__body">
            <h3 className="card__name">The Hauting</h3>
            <p className="card__desc">
              The Haunting of Bly Manor | Teaser Trailer | Netflix
            </p>
          </div>
        </div>
        <div className="card">
          <div className="card__img">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/Io0fBr1XBUA?controls=0"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div className="card__body">
            <h3 className="card__name">The Hauting</h3>
            <p className="card__desc">
              The Haunting of Bly Manor | Teaser Trailer | Netflix
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Trailer;