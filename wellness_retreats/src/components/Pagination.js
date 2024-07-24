import React from 'react';

function Pagination({ page, setPage }) {
  return (
    <div className="flex justify-center my-6">
      <button 
        style={{backgroundColor:'#1b3252', color:'white'}}
        className="border rounded p-2 mx-2"
        onClick={() => setPage(page - 1)}
        disabled={page === 1}
      >
        Previous
      </button>
      <button 
        style={{backgroundColor:'#1b3252', color:'white'}}
        className="border rounded p-2 mx-2"
        onClick={() => setPage(page + 1)}
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
