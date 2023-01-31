import React, { useState } from "react";
import About from "./components/About";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Skills from "./components/Skills";
import Work from "./components/Work";
import "./sass/main.scss";

function App() {
  const [navHeight, setNavHeight] = useState(0);

  const [workSectionFilterTags, setWorkSectionFilterTags] = useState<string[]>(
    []
  );

  return (
    <>
      <NavBar setNavHeight={setNavHeight} />
      <Home navHeight={navHeight} />
      <Skills />
      <About />
      <Work
        filterTags={workSectionFilterTags}
        setFilterTags={setWorkSectionFilterTags}
      />
      <ContactMe />
      <Footer />
    </>
  );
}

export default App;
