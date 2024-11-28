import React, { useState } from "react";

function Searcher({ setSearchQuery }) {
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSearch = () => {
    setSearchQuery(query.trim());
  };

  return (
    <div className="col">
      <div className="input-group mb-3">
        <span className="input-group-text" id="inputGroup-sizing-default">
          Buscar película
        </span>
        <input
          type="text"
          className="form-control"
          placeholder="Ingresar título"
          value={query}
          onChange={handleInputChange}
        />
        <div className="input-group-append">
          <button className="btn" type="button" onClick={handleSearch}>
            Buscar
          </button>
        </div>
      </div>
    </div>
  );
}

export default Searcher;
