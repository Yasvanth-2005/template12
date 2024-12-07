import React from "react";

const Card = ({ name, position, content }) => {
  return (
    <div>
      <h1>{name}</h1>
      <h2>{position}</h2>
      <p>{content}</p>
    </div>
  );
};

export default Card;
