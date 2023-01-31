import React from "react";
import { Waypoint } from "react-waypoint";

type Props = {};

interface IconClass {
  name: string;
  url: string;
}

const ContactMe = (props: Props) => {
  const iconsClasses: IconClass[] = [
    { name: "ri-github-fill", url: "https://github.com/abdraoufx" },
    { name: "ri-twitter-fill", url: "https://twitter.com/abdraoufx" },
    { name: "ri-facebook-fill", url: "https://www.facebook.com/AbdRaouf.zk/" },
  ];

  const toggleAnimations = (): void => {
    // Contact me section
    document
      .querySelector(".contact-me")
      ?.classList.add("show-animated-border-top");

    // title
    document.querySelector(".contact-me__title")?.classList.add("show-lines");

    // Shape
    setTimeout(() => {
      document
        .querySelector(".contact-me .shape .top-line")
        ?.classList.add("full-width");

      document
        .querySelectorAll(".contact-me .horz-lines-container__line")
        .forEach((line) => line.classList.add("full-height"));
    }, 250);

    // Icons
    setTimeout(() => {
      document
        .querySelectorAll(".contact-me .icon")
        .forEach((icon) => icon.classList.add("show"));
    }, 2000);
  };

  const renderLinks = (): JSX.Element[] => {
    const TRANSITION_DELAY: number = 450;

    return iconsClasses.map(({ name, url }, idx) => {
      return (
        <span
          className="horz-lines-container__line"
          key={name}
          style={{ transitionDelay: `${TRANSITION_DELAY * (idx + 1)}ms` }}
        >
          <a className="icon" href={url} target="_blank" rel="noreferrer">
            <i className={name}></i>
          </a>
        </span>
      );
    });
  };

  return (
    <Waypoint onEnter={toggleAnimations}>
      <section className="main__contact container" id="contact-me">
        <div className="contact-me animated-border-top is-section">
          <h1 className="contact-me__title underlined-title">contact me</h1>
          <div className="shape">
            <span className="top-line"></span>
            <div className="horz-lines-container">{renderLinks()}</div>
          </div>
        </div>
      </section>
    </Waypoint>
  );
};

export default ContactMe;
