import React from "react";
import { NavLink } from "react-router-dom";

const NoteFound = () => {
  return (
    <div className="notFound">
      <div className="notFoundContent">
        <h3>desolé cette page n'existe pas</h3>
        <NavLink exact to="/">
          <i classNAme="fas fa-home"></i>
          <span>Acceuil</span>
        </NavLink>
      </div>
    </div>
  );
};

export default NoteFound;
