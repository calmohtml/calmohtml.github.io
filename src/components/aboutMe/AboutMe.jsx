import React from "react";
import { Section } from "./Section";
import { Link } from "react-router-dom";
import { Button } from "../button/Button";

export const AboutMe = () => {
  return (
    <div>
      <h1>About me</h1>
      <div className="aboutMe--container">
        <Section
          h3="¿Who are you?"
          h4="I'm Joan, a Frontend Developer trying to get into the labor market, in
          search of my first experience."
        />
        <Section
          h3="Tell me something about you."
          h4="Since at 16 I found web development, I love creating projects or
            pages, looking to keep learning."
        />
        <Section
          h3="¿Where did you learn to code?"
          h4="Through courses in Platzi and Digital House, looking for videos on
            YouTube, or simply consulting the search engine."
        />
        <Section
          h3="¿Would you like to learn something else?"
          h4="I want to continue deepening web development, but I also admit that
            I am fascinated by Computer Security and Ethical Hacking."
        />
        <Section
          h3="¿Any goal in the short term?"
          h4="The first thing is to get work as dev and be able to contribute
            value to the work in which I am."
        />
        <Section
          h3="¿And in the long term?"
          h4="I would love to create a development-related company. It sounds
            ambitious, and surely late years in doing so. But first to achieve
            it, you have to dream it."
        />
      </div>
      <div className="technologies__links">
        <ul>
          <li>
            <h3>Here's what I've made so far</h3>
            <Link to="/projects">
              <Button text="My projects" />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
