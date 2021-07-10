import React, { Fragment } from "react";
import { Button } from "../button/Button";

export const SingleContactEmail = ({ h2, h3 }) => {
  return (
    <Fragment>
      <div className="singleContact__title">
        <h2>{h2}</h2>
        <h3>{h3}</h3>
      </div>
      <form action="https://formspree.io/f/xayabnbr" method="POST">
        <input type="email" name="_replyto" placeholder="E-mail" />
        <textarea name="message" placeholder="Message"></textarea>
        <Button text="Send" />
      </form>
    </Fragment>
  );
};
