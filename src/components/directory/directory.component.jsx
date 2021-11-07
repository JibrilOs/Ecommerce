import React, { useState } from "react";
import MenuItem from "../menu-item/menu-item.component";
import sections from "./directory.data";
import "./directory.scss";

function Directory(props) {
  const [title, setTitle] = useState(sections);
  return (
    <div className="directory-menu">
      {title.map(({ title, id, imageUrl, size }) => {
        return (
          <MenuItem title={title} key={id} imageUrl={imageUrl} size={size} />
        );
      })}
    </div>
  );
}

export default Directory;
