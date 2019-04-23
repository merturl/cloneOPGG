import React from "react";
import PropTypes from 'prop-types';
import "./Search.scss";
const Search = ({ name, onInputChange, search }) => {
  return (
    <form className="search" onSubmit={search}>
      <input placeholder="Player Name"
        value={name}
        onChange={onInputChange}
      />
      <button type="submit">Search</button>
    </form>
  )
}

Search.propTypes = {
  name: PropTypes.string,
  onInputChange: PropTypes.func,
  submit: PropTypes.func,
};

export default Search;
