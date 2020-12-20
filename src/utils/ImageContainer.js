import React from "react";

function ImageContainer({ imageURL }) {
  return (
    <div className="image_container m-1">
      <img className="img-thumbnail image" src={imageURL} />
    </div>
  );
}

export default ImageContainer;
