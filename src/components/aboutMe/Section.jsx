import React, { Fragment } from "react";

export const Section = ({ h3, h4 }) => {
  return (
    <Fragment>
      <section className="section">
        <h3>{h3}</h3>
        <h4>{h4}</h4>
      </section>
    </Fragment>
  );
};
