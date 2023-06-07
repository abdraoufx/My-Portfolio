export interface Project {
  name: string;
  img: string;
  techs: string[];
  keywords: string[];
  desp?: string;
  url: string;
}

const IMAGES_PATH: string = "/images/projects_images";

export const projects: Project[] = [
  {
    name: "image uploader",
    img: `https://raw.githubusercontent.com/abdraoufx/image_uploader/main/images/main_site.png`,
    techs: ["vanilla js", "typescript", "sass", "php"],
    keywords: ["HTML", "sass", "php", "vanilla js"],
    desp: "image uploader makes users able to upload their images with additional features",
    url: "https://github.com/abdraoufx/image_uploader",
  },
  {
    name: "debt control system for shops",
    img: `${IMAGES_PATH}/dcsfso.png`,
    techs: ["react js", "typescript", "tailwind", "sass", "firebase"],
    keywords: [
      "react js",
      "typescript",
      "tailwind",
      "sass",
      "firebase",
      "management system",
    ],
    desp: "management system to manage your debt in your shop",
    url: "https://github.com/abdraoufx/debt_control_system_for_shops",
  },
  {
    name: "find dev",
    img: `${IMAGES_PATH}/find-dev.png`,
    techs: ["react js", "typescript", "tailwind", "sass"],
    keywords: ["react js", "typescript", "tailwind", "sass", "api"],
    desp: "give you the ability to search for any dev by github",
    url: "https://github.com/abdraoufx/Find-Dev",
  },
  {
    name: "quiz app",
    img: `${IMAGES_PATH}/quiz-app.png`,
    techs: ["react js", "typescript", "tailwind", "sass"],
    keywords: ["react js", "typescript", "tailwind", "sass", "quiz", "api"],
    desp: "test your computer skills with a quiz",
    url: "https://github.com/abdraoufx/Quiz-App",
  },
  {
    name: "rock paper scissors game",
    img: `${IMAGES_PATH}/r-p-s.png`,
    techs: ["react js", "typescript", "tailwind", "sass"],
    keywords: ["react js", "typescript", "tailwind", "sass", "game"],
    desp: "enjoy challenging pc in rock, paper, scissors game",
    url: "https://github.com/abdraoufx/frontEndMentor_Challenges/tree/main/advanced/rock_paper_scissors_game",
  },
  {
    name: "rest countries",
    img: `${IMAGES_PATH}/rest-countries.png`,
    techs: ["react js", "typescript", "sass"],
    keywords: ["react js", "typescript", "sass", "api"],
    desp: "provide you all info you want about a country",
    url: "https://github.com/abdraoufx/frontEndMentor_Challenges/tree/main/advanced/rest_countries_api",
  },
  {
    name: "url shortening API",
    img: `${IMAGES_PATH}/url-short.png`,
    techs: ["vanilla js", "sass"],
    keywords: ["vanilla js", "sass", "api", "landing page"],
    desp: "have a long url want to simplify it? try me",
    url: "https://github.com/abdraoufx/frontEndMentor_Challenges/tree/main/intermediate/URL_shortening_API_landing_page",
  },
  {
    name: "job listing with filtering",
    img: `${IMAGES_PATH}/job_listing.png`,
    techs: ["react js", "typescript", "tailwind", "sass"],
    keywords: ["react js", "typescript", "tailwind", "sass"],
    desp: "jobs page; You can Filter :)",
    url: "https://github.com/abdraoufx/frontEndMentor_Challenges/tree/main/intermediate/job-listing-with-filtering",
  },
  {
    name: "blogr landing page",
    img: `${IMAGES_PATH}/blogr_landing_page.png`,
    techs: ["vanilla js", "sass"],
    keywords: ["vanilla js", "sass", "landing page"],
    desp: "Simple Blogr Landing Page",
    url: "https://github.com/abdraoufx/frontEndMentor_Challenges/tree/main/junior/blogr_landing_page",
  },
  {
    name: "huddle landing page",
    img: `${IMAGES_PATH}/huddle_landing_page.png`,
    techs: ["vanilla js", "sass"],
    keywords: ["vanilla js", "sass", "landing page"],
    desp: "Simple Huddle Landing Page",
    url: "https://github.com/abdraoufx/frontEndMentor_Challenges/tree/main/junior/huddle_landing_page",
  },
  {
    name: "clipboard landing page",
    img: `${IMAGES_PATH}/clipboard_landing_page.png`,
    techs: ["vanilla js", "sass"],
    keywords: ["vanilla js", "sass", "landing page"],
    desp: "Simple Clipboard Landing Page",
    url: "https://github.com/abdraoufx/frontEndMentor_Challenges/tree/main/junior/clipboard_landing_page",
  },
  {
    name: "loopstudios landing page",
    img: `${IMAGES_PATH}/loopstudios_landing_page.png`,
    techs: ["vanilla js", "sass"],
    keywords: ["vanilla js", "sass", "landing page"],
    desp: "Simple Loopstudios Landing Page",
    url: "https://github.com/abdraoufx/frontEndMentor_Challenges/tree/main/junior/loopstudios_landing_page",
  },
  {
    name: "crowdfunding landing page",
    img: `${IMAGES_PATH}/crowdfunding_product_page.png`,
    techs: ["vanilla js", "sass"],
    keywords: ["vanilla js", "sass", "product page"],
    desp: "Crowdfunding Example Product Page",
    url: "https://github.com/abdraoufx/frontEndMentor_Challenges/tree/main/junior/crowdfunding_product_page",
  },
];
