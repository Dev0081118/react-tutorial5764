import React from "react";
import { Bookmark } from "lucide-react";

 const Card = ({ company, logo, posted, title, type, level, salary, location }) => {
  return (
      <div className="card">
        <div className="top">
          <img
            src={logo}
            alt=""
          />
          <button className="saveBtn">
            Save
            <Bookmark size={14} strokeWidth={2} />
          </button>
        </div>

        <div className="center">
          <div className="company">
            <h3>{company}</h3>
            <span>{posted}</span>
          </div>
          <h2>{title}</h2>
          <div className="tags">
            <span>{type}</span>
            <span>{level}</span>
          </div>
        </div>

        <div className="bottom">
          <div className="salary">
            <h3>{salary}</h3>
            <p>{location}</p>
          </div>
          <button className="applyBtn">
            Apply now
          </button>
        </div>
      </div>
  );
};

export default Card;