import React, { useState } from "react";
import PropTypes from "prop-types";
import "./search-panel.css";

const SearchPanel = ({onSearch, onBack, isDark}) => {
  const [term, setTerm] = useState("");


  return (
    <div className="search-wrapper">
      <h1>Álbum do conhecimento</h1>
      <label>
        <input
          type="text"
          className="search_input"
          placeholder="Pesquise aqui"
          value={term}
          onChange={(e) => {
            setTerm(e.target.value);
          }
        }
        />
        <button
          className="search_button"
          onClick={() => onSearch(term)}
        >
          <img src={require("../../resourses/search.png")} alt="" />
        </button>
      </label>
    </div>
  );
};

SearchPanel.propTypes = {
    onSearch : PropTypes.func
}

export default SearchPanel;
