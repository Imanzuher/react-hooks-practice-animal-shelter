import React from "react";
import { useState } from "react";
function Pet({ data }) {
  const [isAdopted, setIsAdopted] = useState(data.isAdopted);

  return (
    <div className="card" data-testid="pet">
      <div className="content">
        <span className="header">
          {data.gender === "female" ? "♀" : "♂"} {"     "}
          {data.name}
        </span>
        <div className="meta">
          <span className="date">{data.type}</span>
        </div>
        <div className="description">
          <p>Age: {data.age}</p>
          <p>Weight: {data.weight}</p>
        </div>
      </div>
      <div className="extra content">
        {isAdopted ? (
          <button className="ui disabled button">Already adopted</button>
        ) : (
          <button
            className="ui primary button"
            onClick={() => setIsAdopted(true)}
          >
            Adopt pet
          </button>
        )}
      </div>
    </div>
  );
}

export default Pet;
