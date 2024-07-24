import React from "react";
import img from '../wellness.jpg'

function HeaderImg() {
  return (
    <div style={{backgroundColor:'#e0d9cf'}} className="border mx-5 mt-4 rounded p-6">
      <img
        src={img}
        className="w-full h-96 object-cover rounded"
      />
      <h2 className="text-xl font-bold my-3">Discover Your Inner Peace</h2>
      <p>Join us for a series of wellness retreats designed to help you find tranquility and rejuvenation.</p>
    </div>
  );
}

export default HeaderImg;
