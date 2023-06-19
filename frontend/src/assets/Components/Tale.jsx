import React from "react";

const Tale = ({ title, description, key }) => {
  return (
    <div className="card" id={key}>
      <div className="content">
        <p className="heading">{title}</p>
        <p className="para">{description}</p>
        <button className="btn">Read more</button>
      </div>
    </div>
  );
};

export default Tale;
