import React from "react";

export default function Journal() {
  return (
    <section className="journal">
      <img src="https://source.unsplash.com/WLxQvbMyfas" alt="Japan" />
      <div className="journal--details">
        <div className="journal--location">
          <img
            className="location--icon"
            src="../images/Fill 219.png"
            alt="location icon"
          />
          <span className="location--name">JAPAN</span>
          <span className="location--link">
            <a href="#">View on Google Maps</a>
          </span>
        </div>
        <h2 className="journal--title">Mount Fuji</h2>
        <p className="journal--date">12 Jan, 2021 - 24 Jan, 2021</p>
        <p className="journal--description">
          Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters
          (12,380 feet). Mount Fuji is the single most popular tourist site in
          Japan, for both Japanese and foreign tourists.
        </p>
      </div>
    </section>
  );
}
