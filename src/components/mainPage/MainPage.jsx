import React from "react";
import Me from "../../img/me.jpeg";
import { Link } from "react-router-dom";
import { Button } from "../button/Button";

export const MainPage = () => {
  return (
    <div>
      <main className="main__container">
        <section className="main__component">
          <img src={Me} alt="" className="main__img" />
        </section>
        <section className="main__component">
          <div className="main__text">
            <h1>
              ¡Hi! I'm Joan Segovia
              <span
                className="emoji"
                role="img"
                aria-label="Waving hand"
                aria-hidden="false"
              >
                👋🏻
              </span>
            </h1>
            <h2>
              I'm a Frontend Developer, based in Buenos Aires. I'm also a good
              design lover, looking foward to get my first experience as a dev
              in the IT world
            </h2>
            <div className="main__links">
              <ul>
                <li>
                  <Link to="/aboutme">
                    <Button text="About me" />
                  </Link>
                </li>
                <li>
                  <Link to="/contact">
                    <Button text="Contact" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};
