import React from 'react';

function RetreatList({ retreats }) {
  return (
    <div className="grid grid-cols-1 mx-5 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {retreats.map(retreat => (
        <div style={{backgroundColor:'#e0d9cf'}} key={retreat.id} className="border rounded p-4">
          <img src={retreat.image} alt={retreat.title} className="w-full h-52 object-fill rounded" />
          <h2 className="text-xl font-bold my-3">{retreat.title}</h2>
          <p>{retreat.description}</p>
          <p className="mt-2">Date: {new Date(retreat.date * 1000).toLocaleDateString()}</p>
          <p>Location: {retreat.location}</p>
          <p>Price: ${retreat.price}</p>
        </div>
      ))}
    </div>
  );
}

export default RetreatList;
