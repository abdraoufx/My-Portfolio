import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer
      className="container"
      style={{ textAlign: "center", color: "white", paddingBottom: "15px" }}
    >
      <span
        className="copyright"
        style={{ textTransform: "capitalize", fontWeight: "bold" }}
      >
        Copyright &copy; {new Date().getFullYear()}{" "}
        <span
          className="name"
          style={{ color: "rgb(252 115 61)", lineHeight: "1.6" }}
        >
          AbdeRaouf Zemmal
        </span>{" "}
        | All Rights Reserved.
      </span>
    </footer>
  );
};

export default Footer;
