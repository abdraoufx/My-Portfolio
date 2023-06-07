import React, { useEffect } from "react";
import TransparentOrangeBtn from "./TransparentOrangeBtn";
import { urls } from "../data/links";

type Props = {
  navHeight: number;
};

const Home = ({ navHeight }: Props) => {
  const toggleShowed = () => {
    setTimeout(() => {
      document
        .querySelector(".main__home")
        ?.classList.replace("unshowed", "showed");
    }, 300);

    setTimeout(() => {
      document
        .querySelector(".main__home .small-intro .name")
        ?.classList.add("border-trns");
    }, 600);

    setTimeout(() => {
      document.querySelector(".main__home .job")?.classList.add("show-lines");
    }, 2300);
  };

  useEffect(() => {
    toggleShowed();
  }, []);

  return (
    <section
      className="main__home container unshowed"
      id="home"
      style={{ height: `calc(100vh - ${navHeight}px)` }}
    >
      <h3 className="small-intro">
        greeting to you,{" "}
        <span className="name">
          i'm abdeRaouf. <span className="right-border"></span>
          <span className="left-border"></span>
        </span>
      </h3>
      <h1 className="job">websites creative builder.</h1>
      <p className="bio">
        a Humble Developer Who Can build you an Awesome front-end for your
        website or Improve your Existing one.
        <span>
          Freelancer at{" "}
          <a href={urls.upworkURL} target="_blank" rel="noopener noreferrer">
            upwork.com
          </a>
          .
        </span>
      </p>
      <TransparentOrangeBtn
        classes={["get-in"]}
        clickFnc={() => window.open(urls.upworkURL, "_blank")}
      >
        get in touch
      </TransparentOrangeBtn>
    </section>
  );
};

export default Home;
