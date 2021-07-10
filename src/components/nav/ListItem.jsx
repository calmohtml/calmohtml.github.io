import React, { Fragment } from "react";
import { Link } from "react-router-dom";

export const ListItem = ({ redirect, text }) => {
  return (
    <Fragment>
      <li className="nav__item">
        <Link to={redirect}>
          <h4>{text}</h4>
        </Link>
      </li>
    </Fragment>
  );
};
