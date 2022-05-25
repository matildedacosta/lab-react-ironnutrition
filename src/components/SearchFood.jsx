import React, { useState } from 'react';
import { Divider, Input } from 'antd';

function SearchFood(props) {
  const { searchFilter } = props;
  const [search, setSearch] = useState('');

  const handleSearch = (e) => {
    //this handles the input state
    setSearch(e.target.value);

    //this passes the state up to movieList
    searchFilter(e.target.value);
  };

  return (
    <>
      <Divider>Search</Divider>

      <label htmlFor="search">Search</label>
      <Input
        value={search}
        type="text"
        name="search"
        id="search"
        onChange={handleSearch}
      />
    </>
  );
}

export default SearchFood;
