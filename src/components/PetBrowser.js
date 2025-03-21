import React from "react";

import Pet from "./Pet";

function PetBrowser({ pets }) {
  return (
    <div className="ui cards">
      {pets.map((pet) => {
        return <Pet key={pet.id} data={pet} />;
      })}
    </div>
  );
}

export default PetBrowser;
