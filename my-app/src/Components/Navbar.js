import React, { useState } from "react";
import { Link } from "react-router-dom";
import ModeSwitch from "./ModeSwitch";
import Button from "@mui/material/Button";
import pics from "./assets/images";

export default function Navbar() {
  const [mode, setMode] = useState("Light");
  const [logo, setLogo] = useState(pics.lightLogo);
  const Root = document.body.querySelector("#root").classList;
  const Body = document.body;

  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    Root.add("dark");
  } else {
    Root.remove("dark");
  }

  const toggleMode = () => {
    if (mode === "Light") {
      setMode("Dark");
      Root.add("dark");
      Body.style.backgroundColor = "black";
      setLogo(pics.darkLogo);
      Body.querySelector("#name").src = pics.NameDark;
      Body.querySelector("#mail").src = pics.mailDark;
      Body.querySelector("#twitter").src = pics.twitterDark;
      Body.querySelector("#insta").src = pics.instaDark;
      Body.querySelector("#letsBuild").src = pics.buildDark;
      Body.querySelectorAll("#navlink").forEach((element) => {
        element.style.color = "white";
      });
      localStorage.theme = "dark";
    } else {
      setMode("Light");
      Root.remove("dark");
      Body.style.backgroundColor = "white";
      setLogo(pics.lightLogo);
      Body.querySelector("#name").src = pics.NameLight;
      Body.querySelector("#mail").src = pics.mailLight;
      Body.querySelector("#twitter").src = pics.twitterLight;
      Body.querySelector("#insta").src = pics.instaLight;
      Body.querySelector("#letsBuild").src = pics.buildLight;
      Body.querySelectorAll("#navlink").forEach((element) => {
        element.style.color = "black";
      });
      localStorage.theme = "light";
    }
  };

  const tD = { textDecoration: "none" };

  return (
    <div className="grid grid-cols-[2fr_1fr_2fr] items-center bg-white dark:bg-black h-20 md:px-[5%] px-0 py-0 sticky top-0 z-50">
      <div className="md:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 ml-6 dark:text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 8h16M4 16h16"
          />
        </svg>
      </div>
      {/* LOGO */}
      <Link to="/" className="flex justify-center md:justify-start">
        <img
          className="w-16 dark:w-12 md:ml-4 mt-2 rounded-full"
          src={logo}
          alt="Home"
        />
      </Link>
      <div className="navlinks hidden md:flex justify-between items-center">
        <Link to="/works" style={tD}>
          <Button id="navlink">Works</Button>
        </Link>
        <Link to="/services" style={tD}>
          <Button id="navlink">Services</Button>
        </Link>
        <Link to="/jobs" style={tD}>
          <Button id="navlink">Jobs</Button>
        </Link>
        <Link to="/about" style={tD}>
          <Button id="navlink">About</Button>
        </Link>
      </div>
      <div className="flex justify-end">
        <ModeSwitch toggle={toggleMode} label="" />
        {/* <Button id="loginButton" variant="contained">Login</Button> */}
      </div>
    </div>
  );
}
