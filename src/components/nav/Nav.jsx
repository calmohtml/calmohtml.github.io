import React from "react";
import Me_v2 from "../../img/me_v2.jpg";
import { Link } from "react-router-dom";
import { ListItem } from "./ListItem";

export const Nav = () => {
  return (
    <nav className="nav">
      <div className="me__container">
        <img src={Me_v2} alt="" className="me__img" />
        <Link to="/" className="me">
          <h1 className="me__text">Joan Segovia</h1>
        </Link>
      </div>
      <ul className="nav__links">
        <ListItem text="Me" redirect="/aboutme" />
        <ListItem text="Projects" redirect="/projects" />
        <ListItem text="Contact" redirect="/contact" />
      </ul>
    </nav>
  );
};
