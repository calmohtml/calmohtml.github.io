import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Button } from "../button/Button";

export const SingleProject = ({ h2, h3, img, projectLink }) => {
  return (
    <Fragment>
      <section className="singleProject">
        <div className="singleProject__text">
          <h2>{h2}</h2>
          <h3>{h3}</h3>
        </div>
        <div className="singleProject__media">
          <figure className="singleProject__img">
            <img src={img} alt="" />
          </figure>
        </div>
        <Link
          to={projectLink}
          className="singleProject__link"
          target="_blank"
          rel="noreferrer"
        >
          <Button text="GitHub" />
        </Link>
      </section>
    </Fragment>
  );
};
