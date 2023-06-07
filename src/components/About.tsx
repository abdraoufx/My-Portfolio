import React from "react";
import { Waypoint } from "react-waypoint";
import TransparentOrangeBtn from "./TransparentOrangeBtn";
import { urls } from "../data/links";

type Props = {};

const About = (props: Props) => {
  const MY_MAIN_SKILLS: string[] = ["react"];

  const EXTRA_SKILLS: string[] = [
    "firebase",
    "bug bounty hunting",
    "basic figma design",
  ];

  const IDEAS: string[] = [
    "landing pages",
    "control, management systems",
    "games",
  ];

  const toggleAnimations = (): void => {
    // about me
    document
      .querySelector(".about-me")
      ?.classList.add("show-animated-border-top");

    // title
    document.querySelector(".about-me__title")?.classList.add("show-lines");

    // Bio
    document.querySelector(".about-me__bio")?.classList.add("showed");

    // Bio => My Name
    document
      .querySelector(".about-me__bio .one .head .name")
      ?.classList.add("border-trns");
  };

  const renderMainSkills = (): JSX.Element[] => {
    return MY_MAIN_SKILLS.map((skill, idx) => {
      return (
        <span key={skill} className="about-skill">
          {idx === MY_MAIN_SKILLS.length - 1 ? skill : `${skill}, `}
        </span>
      );
    });
  };

  const renderExtraSkills = (): JSX.Element[] => {
    return EXTRA_SKILLS.map((skill, idx) => {
      return (
        <span className="extra-skill" key={skill}>
          {idx === EXTRA_SKILLS.length - 1 ? skill : `${skill}, `}
        </span>
      );
    });
  };

  const renderIdeas = (): JSX.Element[] => {
    return IDEAS.map((idea, idx) => {
      return (
        <span key={idea} className="idea">
          {idx === IDEAS.length - 1 ? idea : `${idea}, `}
        </span>
      );
    });
  };

  return (
    <Waypoint onEnter={toggleAnimations}>
      <section className="main__about container" id="about">
        <div className="about-me animated-border-top is-section">
          <h1 className="about-me__title underlined-title">about me</h1>
          <div className="about-me__bio to-show">
            <p className="one">
              <span className="head">
                My Full Name is{" "}
                <span className="name">
                  Abderaouf Zemmal <span className="left-border"></span>
                  <span className="right-border"></span>
                </span>
              </span>
              , I'am a Front-End Developer with {renderMainSkills()}. My Main
              Skill is turnning different Ideas Like {renderIdeas()} or anything
              you need into websites.
            </p>
            <p className="two">
              I Have Extra Skills Not Showing Above Like : {renderExtraSkills()}
              .
            </p>
            <TransparentOrangeBtn
              classes={["contact-me-btn"]}
              clickFnc={() => window.open(urls.fbURL, "_blank")}
            >
              contact me
            </TransparentOrangeBtn>
          </div>
        </div>
      </section>
    </Waypoint>
  );
};

export default About;
