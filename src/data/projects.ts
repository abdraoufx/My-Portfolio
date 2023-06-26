export interface Project {
  name: string;
  img: string;
  techs: string[];
  keywords: string[];
  desp?: string;
  url: string;
}

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
    img: `https://raw.githubusercontent.com/abdraoufx/debt_control_system_for_shops/master/public/design/desktop-design.png`,
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
    name: "CatWiki",
    img: `https://raw.githubusercontent.com/abdraoufx/Cat_Wiki/main/client/public/images/design/live-website.png`,
    techs: ["react js", "typescript", "sass", "php"],
    keywords: [],
    desp: "Cat Wiki is a web application designed to browse cat breeds and discover interesting information about them.",
    url: "https://github.com/abdraoufx/Cat_Wiki",
  },
  {
    name: "find dev",
    img: `https://raw.githubusercontent.com/abdraoufx/Find-Dev/gh-pages/images/app_screenshot.PNG`,
    techs: ["react js", "typescript", "tailwind", "sass"],
    keywords: ["react js", "typescript", "tailwind", "sass", "api"],
    desp: "give you the ability to search for any dev by github",
    url: "https://github.com/abdraoufx/Find-Dev",
  },
  {
    name: "quiz app",
    img: `https://raw.githubusercontent.com/abdraoufx/Quiz-App/master/public/images/design.png`,
    techs: ["react js", "typescript", "tailwind", "sass"],
    keywords: ["react js", "typescript", "tailwind", "sass", "quiz", "api"],
    desp: "test your computer skills with a quiz",
    url: "https://github.com/abdraoufx/Quiz-App",
  },
  {
    name: "rock paper scissors game",
    img: `https://github.com/abdraoufx/frontEndMentor_Challenges/raw/main/advanced/rock_paper_scissors_game/public/images/desktop-preview.jpg`,
    techs: ["react js", "typescript", "tailwind", "sass"],
    keywords: ["react js", "typescript", "tailwind", "sass", "game"],
    desp: "enjoy challenging pc in rock, paper, scissors game",
    url: "https://github.com/abdraoufx/frontEndMentor_Challenges/tree/main/advanced/rock_paper_scissors_game",
  },
  {
    name: "rest countries",
    img: `https://raw.githubusercontent.com/abdraoufx/frontEndMentor_Challenges/main/advanced/rest_countries_api/public/images/desktop-preview.jpg`,
    techs: ["react js", "typescript", "sass"],
    keywords: ["react js", "typescript", "sass", "api"],
    desp: "provide you all info you want about a country",
    url: "https://github.com/abdraoufx/frontEndMentor_Challenges/tree/main/advanced/rest_countries_api",
  },
  {
    name: "url shortening API",
    img: `https://raw.githubusercontent.com/abdraoufx/frontEndMentor_Challenges/main/intermediate/URL_shortening_API_landing_page/images/desktop-preview.jpg`,
    techs: ["vanilla js", "sass"],
    keywords: ["vanilla js", "sass", "api", "landing page"],
    desp: "have a long url want to simplify it? try me",
    url: "https://github.com/abdraoufx/frontEndMentor_Challenges/tree/main/intermediate/URL_shortening_API_landing_page",
  },
  {
    name: "job listing with filtering",
    img: `https://raw.githubusercontent.com/abdraoufx/frontEndMentor_Challenges/main/intermediate/job-listing-with-filtering/public/images/desktop-preview.jpg`,
    techs: ["react js", "typescript", "tailwind", "sass"],
    keywords: ["react js", "typescript", "tailwind", "sass"],
    desp: "jobs page; You can Filter :)",
    url: "https://github.com/abdraoufx/frontEndMentor_Challenges/tree/main/intermediate/job-listing-with-filtering",
  },
  {
    name: "blogr landing page",
    img: `https://raw.githubusercontent.com/abdraoufx/frontEndMentor_Challenges/main/junior/blogr_landing_page/images/desktop-preview.jpg`,
    techs: ["vanilla js", "sass"],
    keywords: ["vanilla js", "sass", "landing page"],
    desp: "Simple Blogr Landing Page",
    url: "https://github.com/abdraoufx/frontEndMentor_Challenges/tree/main/junior/blogr_landing_page",
  },
  {
    name: "huddle landing page",
    img: `https://camo.githubusercontent.com/faf43c31ff48d178adddec41fd2df75daeceeb8ef9a2e45f35e122f9b76ebb6b/68747470733a2f2f7265732e636c6f7564696e6172792e636f6d2f647a32303973366a6b2f696d6167652f75706c6f61642f715f6175746f3a676f6f642c775f3930302f4368616c6c656e6765732f723666696f337575636133727176696a6a6176682e6a7067`,
    techs: ["vanilla js", "sass"],
    keywords: ["vanilla js", "sass", "landing page"],
    desp: "Simple Huddle Landing Page",
    url: "https://github.com/abdraoufx/frontEndMentor_Challenges/tree/main/junior/huddle_landing_page",
  },
  {
    name: "clipboard landing page",
    img: `https://github.com/abdraoufx/frontEndMentor_Challenges/raw/main/junior/clipboard_landing_page/images/desktop-preview.jpg`,
    techs: ["vanilla js", "sass"],
    keywords: ["vanilla js", "sass", "product page"],
    desp: "Crowdfunding Example Product Page",
    url: "https://github.com/abdraoufx/frontEndMentor_Challenges/tree/main/junior/crowdfunding_product_page",
  },
];
