import React from "react";
import { string, node } from "prop-types";

const Intro = ({ title, children }) => (
  <div className="intro">
    <h1 className="title">{title}</h1>
    {children}
  </div>
);

Intro.propTypes = {
  title: string.isRequired,
  children: node
};

export default Intro;
