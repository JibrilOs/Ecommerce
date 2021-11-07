import React from "react";
import "./menu-item.scss";
function MenuItem({ title, id, imageUrl, size }) {
  return (
    <div
      className={`${size} menu-item `}
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="content">
        <h1 className="title">{title} </h1>
        <span className="subtitle">SHOP NOW</span>
        {console.log(size)}
      </div>
    </div>
  );
}

export default MenuItem;
