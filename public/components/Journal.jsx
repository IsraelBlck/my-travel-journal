import React from "react";

export default function Journal(props) {
  return (
    <div className="main">
      <div className="journal flex">
        <img
          className="journal--image"
          src={props.item.img}
          alt="Japan"
        />
        <div className="journal--details">
          <div className="journal--location">
            <img
              className="location--icon"
              src="../images/Fill 219.png"
              alt="location icon"
            />
            <span className="location--name">{props.item.location}</span>
            <span className="location--link">
              <a href="#">View on Google Maps</a>
            </span>
          </div>
          <h2 className="journal--title">{props.item.title}</h2>
          <p className="journal--date">{props.item.date}</p>
          <p className="journal--description">
            {props.item.description}
          </p>
        </div>
      </div>
      <hr className="hr" />
    </div>
  );
}
