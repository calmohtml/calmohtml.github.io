import React, { Fragment } from "react";
import { FaAddressCard, FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { SingleContact } from "./SingleContact";
import { SingleContactEmail } from "./SingleContactEmail";
import { Link } from "react-router-dom";
import { Button } from "../button/Button";

export const Contact = () => {
  return (
    <Fragment>
      <h1>Contact</h1>
      <section className="contact">
        <SingleContact
          h2="My CV"
          h3="All the info that you need."
          icon={<FaAddressCard />}
          href="https://drive.google.com/uc?id=1ZZh0Ewx1mKNa92gScpp0akNZ2I4LmUvA&export=download"
        />
        <SingleContact
          h2="LinkedIn"
          h3="Posts of mine, or just another way to get to me."
          icon={<FaLinkedin />}
          href="https://www.linkedin.com/in/segoviajoan"
        />
        <SingleContact
          h2="GitHub"
          h3="All the projects that I've made so far."
          icon={<FaGithubSquare />}
          href="https://www.github.com/calmohtml"
        />
      </section>
      <section className="singleContact__email">
        <SingleContactEmail h2="Send me a e-mail" h3="Let's talk" />
      </section>
      <div className="start__links">
        <ul>
          <li>
            <h3>Get back to start</h3>
            <Link to="/">
              <Button text="Click here" />
            </Link>
          </li>
        </ul>
      </div>
    </Fragment>
  );
};
