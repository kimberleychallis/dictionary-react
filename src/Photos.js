import React from "react";

const Photos = (props) => {
  if (props.results) {
    return (
      <div className="photos-results">
        {props.results.map((photo, index) => {
          return (
            <a
              href={photo.src.original}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
            >
              <img
                src={photo.src.portrait}
                alt={"&copy;" + photo.photographer}
                className="photo"
                key={index}
              />
            </a>
          );
        })}
      </div>
    );
  } else return null;
};

export default Photos;
