import React from 'react';

function Filter({ setSearchTerm, setFilterType, setFilterLocation, setFilterYearRange }) {
  return (
    <div className="flex flex-col md:flex-row gap-4 mt-10 mb-5 mx-5">
      <select style={{backgroundColor:'#1b3252', color:'white', cursor:'pointer'}}
        className="border rounded px-3 mb-2 md:mb-0 md:mr-2"
        onChange={(e) => setFilterType(e.target.value)}
      >
        <option value="">Filter by type</option>
        <option value="Signature">Signature</option>
        <option value="Standalone">Standalone</option>
      </select>
      <select
        style={{backgroundColor:'#1b3252', color:'white', cursor:'pointer'}} 
        className="border rounded p-2 mb-2 md:mb-0 md:mr-2"
        onChange={(e) => setFilterLocation(e.target.value)}
      >
        <option value="">Filter by location</option>
        <option value="Goa">Goa</option>
        <option value="Rishikesh">Rishikesh</option>
        <option value="Kerala">Kerala</option>
        <option value="Mumbai">Mumbai</option>
        <option value="Delhi">Delhi</option>
        <option value="Pune">Pune</option>
        <option value="Chennai">Chennai</option>
        <option value="Hyderabad">Hyderabad</option>
        <option value="Varanasi">Varanasi</option>
        <option value="Kolkata">Kolkata</option>
      </select>
      <select
        style={{backgroundColor:'#1b3252', color:'white', cursor:'pointer'}}
        className="border rounded p-2 mb-2 md:mb-0 md:mr-2"
        onChange={(e) => setFilterYearRange(e.target.value)}
      >
        <option value="">Filter by Date</option>
        <option value="2023-2024">2023-2024</option>
        <option value="2024-2025">2024-2025</option>
      </select>
      <input 
        style={{backgroundColor:'#1b3252', color:'white', marginLeft:'625px', cursor:'pointer'}}
        type="text"
        placeholder="Search by title"
        className="border rounded w-96 p-2"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
}

export default Filter;
