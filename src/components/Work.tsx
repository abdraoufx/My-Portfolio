import React, { useRef } from "react";
import { Waypoint } from "react-waypoint";
import { Project, projects } from "../data/projects";
import TransparentOrangeBtn from "./TransparentOrangeBtn";
import { urls } from "../data/links";

type Props = {
  filterTags: string[];
  setFilterTags: React.Dispatch<React.SetStateAction<string[]>>;
};

const Work = ({ filterTags, setFilterTags }: Props) => {
  const clonedProjects: Project[] = projects?.filter(({ keywords }) => {
    return filterTags.every((filter) => keywords.includes(filter));
  });

  const workSection: React.MutableRefObject<HTMLDivElement> =
    useRef<HTMLDivElement>(null!);

  const toggleAnimations = (): void => {
    // my work
    document
      .querySelector(".my-work")
      ?.classList.add("show-animated-border-top");

    // title
    document.querySelector(".my-work__title")?.classList.add("show-lines");

    // Tags Title
    setTimeout(() => {
      document.querySelector(".my-work__tags")?.classList.add("show-lines");

      // Projects Container
      document.querySelector(".my-work__projects")?.classList.add("showed");

      // View More Button
      document.querySelector(".main__work .view-more")?.classList.add("showed");
    }, 400);

    // Actual Tags
    setTimeout(() => {
      document.querySelectorAll(".tags-container .tag").forEach((tag) => {
        tag.classList.add("faded");
      });
    }, 1500);
  };

  const renderProjects = (): JSX.Element[] | JSX.Element => {
    if (!clonedProjects.length)
      return <span className="no-project">no project selected.</span>;

    return clonedProjects.map(({ name, techs, url, img, desp, keywords }) => {
      const projectNameWithUnderscroe: string = name.replaceAll(" ", "_");

      const navigateToLink = (link: string) => {
        window.open(link, "_blank");
      };

      const uniqueKeysAndTechs: string[] = Array.from(
        new Set<string>([...techs, ...keywords])
      );

      const projectTechsAndKeys: JSX.Element[] = uniqueKeysAndTechs.map(
        (keyAndTech) => {
          return (
            <span className="techs__tech" key={keyAndTech}>
              {keyAndTech}
            </span>
          );
        }
      );

      return (
        <div
          key={name}
          className={`project project__${projectNameWithUnderscroe}`}
          onClick={() => navigateToLink(url)}
        >
          <span className="curtain"></span>
          <div className="techs">{projectTechsAndKeys}</div>
          <span className="desp">{desp}.</span>
          <img src={img} alt={`${name} Project`} />
        </div>
      );
    });
  };

  const uniqueKeywords: string[] = Array.from(
    projects.reduce((acc, { keywords }) => {
      keywords.forEach((word) => acc.add(word));
      return acc;
    }, new Set<string>())
  );

  const renderKeywords = (): JSX.Element[] => {
    const toggleClass = (
      e: React.MouseEvent<HTMLSpanElement, MouseEvent>,
      tag: string
    ): void => {
      if (e.currentTarget.classList.contains("selected")) {
        e.currentTarget.classList.remove("selected", "border-trns");
        setFilterTags(filterTags.filter((ft) => ft !== tag));
        return;
      }

      e.currentTarget.classList.add("selected", "border-trns");

      setFilterTags([...filterTags, tag]);
    };

    return uniqueKeywords.map((tag) => {
      return (
        <span key={tag} className="tag" onClick={(e) => toggleClass(e, tag)}>
          {tag}
          <span className="left-border"></span>
          <span className="right-border"></span>
        </span>
      );
    });
  };

  return (
    <Waypoint onEnter={toggleAnimations}>
      <section className="main__work container" id="work" ref={workSection}>
        <div className="my-work animated-border-top is-section">
          <h1 className="my-work__title underlined-title">my work</h1>
          <h4 className="my-work__tags underlined-title">Tags</h4>
          <div className="tags-container">{renderKeywords()}</div>
          <div className="my-work__projects to-show">{renderProjects()}</div>
          <TransparentOrangeBtn
            classes={["view-more"]}
            clickFnc={() => window.open(urls.githubURL, "_blank")}
          >
            view more
          </TransparentOrangeBtn>
        </div>
      </section>
    </Waypoint>
  );
};

export default Work;
