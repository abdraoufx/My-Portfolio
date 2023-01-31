import React from "react";
import { Waypoint } from "react-waypoint";

type Props = {};

interface SkillsInt {
  name: string;
  exp: number;
}

const Skills = (props: Props) => {
  const skills: SkillsInt[] = [
    { name: "HTML", exp: 2 },
    { name: "CSS", exp: 2 },
    { name: "Sass", exp: 2 },
    { name: "Tailwind", exp: 1 },
    { name: "JavaScript", exp: 2 },
    { name: "React", exp: 2 },
  ];

  const renderSkillsAsJSX = (): JSX.Element[] => {
    return skills.map(({ name, exp }) => {
      return (
        <div
          className={`my-skills__container__skill ${name.toLowerCase()}`}
          key={name}
        >
          <span className="name">{name}</span>
          <span className="exp border-trns">
            {exp} {exp > 1 ? "years" : "year"} experience
            <span className="left-border"></span>
            <span className="right-border"></span>
          </span>
        </div>
      );
    });
  };

  const toggleAnimations = (): void => {
    // My Skills Container
    document
      .querySelector(".my-skills")
      ?.classList.add("show-animated-border-top");

    // `My Skills` Title
    document.querySelector(".my-skills__title")?.classList.add("show-lines");

    // Every .skill div Element
    document.querySelectorAll(".my-skills__container__skill").forEach((el) => {
      el.classList.add("faded");
    });

    // Every .skill > .exp Element
    setTimeout(() => {
      document
        .querySelectorAll(".my-skills__container__skill .exp")
        .forEach((el) => {
          el.classList.add("border-trns");
        });
    }, 3200);
  };

  return (
    <Waypoint onEnter={toggleAnimations}>
      <section className="main__skills container" id="skills">
        <div className="my-skills animated-border-top is-section">
          <h1 className="my-skills__title underlined-title">my skills</h1>
          <div className="my-skills__container">{renderSkillsAsJSX()}</div>
        </div>
      </section>
    </Waypoint>
  );
};

export default Skills;
