import React, { useState } from "react";
import "../styles/Gif.css";

const Gif: React.FC = () => {
  return (
    <div className="gif-signature">
      <img src={`${process.env.PUBLIC_URL}/images/mila.jpeg`} alt="Mila" width={300} />
      <p>Milica Blagojevic</p>
    </div>
  );
};

export default Gif;
