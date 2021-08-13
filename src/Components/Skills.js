import React, { Fragment } from "react";

export const Skills = ({ skills }) => {
  return (
    <Fragment>
      <ul className="row list-unstyled justify-content-center">
        {skills.map((skill) => (
          <li
            className="card shadow col-5 col-md-2 col-xl-1 m-1 m-lg-2 p-1"
            key={skill.id}>
            <img src={skill.icon} className="card-img-top" alt={skill.id} />
            <span className="ps-1">{skill.id}</span>
          </li>
        ))}
      </ul>
    </Fragment>
  );
};
