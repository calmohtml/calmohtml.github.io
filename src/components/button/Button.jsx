import React, { Fragment } from "react";

export const Button = ({ text }) => {
  return (
    <Fragment>
      <button className="btn" type="submit">
        {text}
      </button>
    </Fragment>
  );
};
