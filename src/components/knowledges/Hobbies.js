import React from "react";

const Hobbies = () => {
  return (
    <div className="hobbies">
      <h3> Interet</h3>
      <ul>
        <li className="Hobbies">
          <i className="fas fa-running"></i>
          <span> cours à pied</span>
        </li>
        <li className="Hobbies">
          <i className="fas fa-hiking"></i>
          <span> Randonnées</span>
        </li>
        <li className="Hobbies">
          <i className="fas fa-seedling"></i>
          <span> Permaculture</span>
        </li>
        <li className="Hobbies">
          <i className="fas fa-bitcoin"></i>
          <span> Crypto-monney</span>
        </li>
      </ul>
    </div>
  );
};

export default Hobbies;
