import React, { Fragment } from "react";
import { Button } from "../button/Button";

export const SingleContact = ({ h2, h3, icon, href }) => {
  return (
    <Fragment>
      <section className="singleContact">
        <div className="singleContact__title">
          <h2>{h2}</h2>
          <h3>{h3}</h3>
        </div>
        <div className="singleContact__img">
          <i>{icon}</i>
        </div>
        <div className="singleContact__link">
          <a
            href={href}
            target="_blank"
            rel="noreferrer"
            className="singleContact__link"
          >
            <Button text="Link" />
          </a>
        </div>
      </section>
    </Fragment>
  );
};
