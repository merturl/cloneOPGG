import React from "react";
import PropTypes from 'prop-types';
import "./Search.scss";
const Search = ({ name, onInputChange, submit }) => {
  return (
    <form className="search" onSubmit={submit}>
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
