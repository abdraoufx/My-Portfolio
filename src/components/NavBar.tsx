import React, { useEffect, useRef, useState } from "react";

type Props = {
  setNavHeight: React.Dispatch<React.SetStateAction<number>>;
};

const NavBar = ({ setNavHeight }: Props) => {
  const nav = useRef<HTMLElement>(null!);

  const [isNavOpened, setIsNavOpened] = useState<boolean>(false);

  const modifyNavShowingState = () => {
    setIsNavOpened(!isNavOpened);
  };

  const showMoreLinksBox = () => {
    const linksElements = document.querySelectorAll(
      ".main-nav__contact-links > a"
    );

    linksElements.forEach((el) => {
      if (el.classList.contains("fade-left")) {
        el.classList.replace("fade-left", "fade-right");
      } else {
        el.classList.add("fade-right");
      }
    });

    setTimeout(() => {
      document
        .querySelector(".more-links-box")
        ?.classList.replace("unshowed", "showed");
    }, 1500);
  };

  const unshowMoreLinksBox = () => {
    const linksElements = document.querySelectorAll(
      ".main-nav__contact-links > a"
    );

    setTimeout(() => {
      document
        .querySelector(".more-links-box")
        ?.classList.replace("showed", "unshowed");
    }, 750);

    linksElements.forEach((el) => {
      el.classList.replace("fade-right", "fade-left");
    });
  };

  const toggleActive = (e: React.MouseEvent<HTMLAnchorElement>): void => {
    if (e.currentTarget.classList.contains("active")) return;

    document
      .querySelector(".main-nav__page-sections a.active")
      ?.classList.remove("active");

    document
      .querySelector(".main-nav__page-sections-mobile a.active")
      ?.classList.remove("active");

    document
      .querySelectorAll(`.${e.currentTarget.classList[0]}`)
      .forEach((el) => {
        el.classList.add("active");
      });

    setTimeout(() => {
      setIsNavOpened(false);
    }, 650);
  };

  const toggleActiveByNavigatedLink = () => {
    const currentSection: string = window.location.hash;

    const toggleActiveOnElement = (query: string) => {
      document
        .querySelectorAll(".main-nav a.active")
        ?.forEach((el: Element) => {
          el.classList.remove("active");
        });

      document.querySelectorAll(query).forEach((el: Element) => {
        el.classList.add("active");
      });
    };

    switch (currentSection) {
      case "#home":
        toggleActiveOnElement(".home-link");
        break;

      case "#skills":
        toggleActiveOnElement(".skills-link");
        break;

      case "#about":
        toggleActiveOnElement(".about-link");
        break;

      case "#work":
        toggleActiveOnElement(".work-link");
        break;

      case "#contact-me":
        toggleActiveOnElement(".contact-me-link");
        break;

      default:
        toggleActiveOnElement(".home-link");
        break;
    }
  };

  useEffect(() => {
    setNavHeight(nav.current.clientHeight);
    toggleActiveByNavigatedLink();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <nav className="main-nav container" ref={nav}>
      <div className="main-nav__page-sections">
        <a
          href="#home"
          className="active home-link link"
          onClick={toggleActive}
        >
          home
        </a>
        <a href="#skills" onClick={toggleActive} className="skills-link link">
          skills
        </a>
        <a href="#about" onClick={toggleActive} className="about-link link">
          about
        </a>
        <a href="#work" onClick={toggleActive} className="work-link link">
          work
        </a>
        <a
          href="#contact-me"
          onClick={toggleActive}
          className="contact-me-link link"
        >
          contact me
        </a>
      </div>
      <div className="main-nav__page-sections-mobile">
        <i
          className="ri-menu-2-fill hamburger-icon"
          onClick={modifyNavShowingState}
        ></i>
        <div className={`menu ${isNavOpened ? "show" : ""}`}>
          <div className="close-img-wrapper">
            <i className="ri-close-line" onClick={modifyNavShowingState}></i>
          </div>
          <div className="links">
            <a
              href="#home"
              className="active home-link link"
              onClick={toggleActive}
            >
              home
            </a>
            <a
              href="#skills"
              className="skills-link link"
              onClick={toggleActive}
            >
              skills
            </a>
            <a href="#about" className="about-link link" onClick={toggleActive}>
              about
            </a>
            <a href="#work" className="work-link link" onClick={toggleActive}>
              work
            </a>
            <a
              href="#contact-me"
              className="contact-me-link link"
              onClick={toggleActive}
            >
              contact me
            </a>
          </div>
        </div>
      </div>
      <div className="main-nav__contact-links">
        <a
          href="https://github.com/abdraoufx"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="ri-github-fill"></i>
        </a>
        <a
          href="https://twitter.com/abdraoufx"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="ri-twitter-fill"></i>
        </a>
        <a
          href="https://www.facebook.com/AbdRaouf.zk/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="ri-facebook-circle-fill"></i>
        </a>
        <i
          className="ri-more-line show-more-links"
          onClick={showMoreLinksBox}
        ></i>
        <div className="more-links-box unshowed" onClick={unshowMoreLinksBox}>
          <a
            href="https://www.upwork.com/freelancers/~0126c518b8543236eb"
            target="_blank"
            rel="noopener noreferrer"
          >
            upwork
          </a>
          <a
            href="https://www.frontendmentor.io/profile/abdraoufx"
            target="_blank"
            rel="noopener noreferrer"
          >
            frontendmentor
          </a>
          <i className="ri-close-line"></i>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
