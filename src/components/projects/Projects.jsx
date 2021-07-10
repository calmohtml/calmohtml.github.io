import React from "react";
import { SingleProject } from "./SingleProject";
import DarkMode from "../../img/dark-mode.png";
import CryptoViewer from "../../img/crypto-viewer.png";
import BreakingBad from "../../img/logoBreakingBad.png";
import ExpenseTracker from "../../img/expenseTracker.png";
import AlmaMate from "../../img/almamate.png";
import MovieApp from "../../img/movies-app.png";
import FakeStoreApp from "../../img/store.png";
import { Link } from "react-router-dom";
import { Button } from "../button/Button";

export const Projects = () => {
  return (
    <div>
      <h1>Projects</h1>
      <section className="projects">
        <SingleProject
          h2="Dark Mode"
          h3="Simple dark-mode functionality with JavaScript."
          img={DarkMode}
          projectLink="https://github.com/calmohtml/dark-mode"
        />
        <SingleProject
          h2="Crypto Viewer"
          h3="Displayer of the main cryptocurrencies, with CoinGecko API."
          img={CryptoViewer}
          projectLink="https://github.com/calmohtml/crypto-viewer"
        />
        <SingleProject
          h2="Breaking Bad API"
          h3="A web app that displays data from the Breaking Bad API, using the
              Parcel bundler."
          img={BreakingBad}
          projectLink="https://github.com/calmohtml/breaking-bad-api"
        />
        <SingleProject
          h2="Expense Tracker"
          h3="Expense tracker with Vanilla JavaScript, Sass and Vite as a
              bundler."
          img={ExpenseTracker}
          projectLink="https://github.com/calmohtml/expense-tracker"
        />
        <SingleProject
          h2="Alma-Mate"
          h3="A e-commerce orientated to sell articles related with mate, made
              with Node, Express, and MySQL as Backend, and HTML, CSS and
              JavaScript as Frontend."
          img={AlmaMate}
          projectLink="https://github.com/calmohtml/alma-mate"
        />
        <SingleProject
          h2="Movie App"
          h3="A movies app, using the TMDb and JavaScript."
          img={MovieApp}
          projectLink="https://github.com/calmohtml/movies-app"
        />
        <SingleProject
          h2="Fake Store App"
          h3="E-commerce with products from API, made with React, React Router
              and Sass."
          img={FakeStoreApp}
          projectLink="https://github.com/calmohtml/fake-store-app"
        />
      </section>
      <div className="contact__links">
        <ul>
          <li>
            <h3>¿Wanna get in touch with me?</h3>
            <Link to="/contact">
              <Button text="Let's talk" />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
