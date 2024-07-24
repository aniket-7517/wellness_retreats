import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Filter from './components/Filter';
import RetreatList from './components/RetreatList';
import Pagination from './components/Pagination';
import HeaderImg from './components/HeaderImg';

function App() {
  const [allRetreats, setAllRetreats] = useState([]);
  const [filteredRetreats, setFilteredRetreats] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('');
  const [filterLocation, setFilterLocation] = useState('');
  const [filterYearRange, setFilterYearRange] = useState('');
  const [page, setPage] = useState(1);
  const limit = 3;

  useEffect(() => {
    fetch(`https://669f704cb132e2c136fdd9a0.mockapi.io/api/v1/retreats`)
      .then(response => response.json())
      .then(data => {
        setAllRetreats(data);
        setFilteredRetreats(data);
      });
  }, []);

  useEffect(() => {
    let filtered = allRetreats;

    if (searchTerm) {
      filtered = filtered.filter(retreat => retreat.title.toLowerCase().includes(searchTerm.toLowerCase()));
    }

    if (filterType) {
      filtered = filtered.filter(retreat => retreat.type === filterType);
    }

    if (filterLocation) {
      filtered = filtered.filter(retreat => retreat.location === filterLocation);
    }

    if (filterYearRange) {
      const [startYear, endYear] = filterYearRange.split('-').map(year => parseInt(year));
      filtered = filtered.filter(retreat => {
        const retreatYear = new Date(retreat.date * 1000).getFullYear();
        return retreatYear >= startYear && retreatYear <= endYear;
      });
    }

    setFilteredRetreats(filtered);
    setPage(1); // Reset to the first page when filters change
  }, [searchTerm, filterType, filterLocation, filterYearRange, allRetreats]);

  const paginatedRetreats = filteredRetreats.slice((page - 1) * limit, page * limit);
  const totalPages = Math.ceil(filteredRetreats.length / limit);

  return (
    <div className="container mx-auto">
      <Header />
      <HeaderImg />
      <Filter 
        setFilterType={setFilterType}
        setFilterLocation={setFilterLocation}
        setFilterYearRange={setFilterYearRange}
        setSearchTerm={setSearchTerm} 
      />
      <RetreatList retreats={paginatedRetreats} />
      <Pagination page={page} setPage={setPage} totalPages={totalPages} />
    </div>
  );
}

export default App;
