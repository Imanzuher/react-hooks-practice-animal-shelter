import React, { useState } from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";
const API_URL = "http://localhost:3001/pets";
function App() {
  const [pets, setPets] = useState([]);
  const [filters, setFilters] = useState({ type: "all" });
  const onFindPetsClick = () => {
    fetch(filters.type === "all" ? API_URL : `${API_URL}?type=${filters.type}`)
      .then((res) => res.json())
      .then((data) => setPets(data));
  };
  return (
    <div className="ui container">
      <header>
        <h1 className="ui dividing header">React Animal Shelter</h1>
      </header>
      <div className="ui container">
        <div className="ui grid">
          <div className="four wide column">
            <Filters
              onFindPetsClick={onFindPetsClick}
              onChangeType={setFilters}
            />
          </div>
          <div className="twelve wide column">
            <PetBrowser pets={pets} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
