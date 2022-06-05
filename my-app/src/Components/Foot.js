import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import bitmoji from "./assets/bitmoji.png";
import instagram from "./assets/instagram.png";
import twitter from "./assets/twitter.png";
import telegram from "./assets/telegram.png";
import discord from "./assets/discord.png";
import clubhouse from "./assets/mic.png";
import bitclout from "./assets/bitclout.png";
import footnote from "./assets/footnote.png";

export default function Foot() {
  return (
    <div
      id="footer"
      className="grid grid-cols-2 md:grid-cols-[2fr_2.5fr_3fr] bg-slate-900 dark:bg-zinc-900 items-end mt-8 px-8 md:px-20 lg:px-28 xl:px-40 2xl:px-60 pt-6 md:pt-10 xl:pt-14 pb-4 xl:pb-8 absolute z-50"
    >
      <section>
        <img
          src={bitmoji}
          alt="bitmoji"
          className="w-12 xl:w-20 sm:ml-[10%] md:ml-2"
        />
        <h3 className="mt-4 text-2xl xl:text-3xl 2xl:text-4xl font-medium xl:font-semibold sm:ml-[10%] md:ml-2">
          Yuvraj Goyal
        </h3>
        <h4 className="m-0 text-lg xl:text-2xl text-gray-400 font-light sm:ml-[10%] md:ml-2">
          #mrManiac
        </h4>
      </section>

      <section>
        <div className="grid grid-cols-6 w-48 xl:w-60 justify-items-start items-center">
          <img src={instagram} alt="" className="social w-5 xl:w-6" />
          <img src={twitter} alt="" className="social w-5 xl:w-6" />
          <img src={telegram} alt="" className="social w-5 xl:w-6" />
          <img src={discord} alt="" className="social w-5 xl:w-6" />
          <img src={clubhouse} alt="" className="social w-5 xl:w-6" />
          <img src={bitclout} alt="" className="social w-5 xl:w-6" />
        </div>
        <p className="m-0 mt-4 font-light xl:font-normal">email me at</p>
        <h4 className="text-base md:text-lg xl:text-2xl font-medium">
          richyuvi2@gmail.com
        </h4>
      </section>

      <section className="hidden md:inline-block">
        <h1 className="mb-2 text-4xl xl:text-5xl 2xl:text-6xl">Lets Talk</h1>
        <p className="text-sm xl:text-base leading-6 xl:leading-7">
          I am always open to discuss ideas and projects, improve your online
          presence or help you with your UI/UX & tech challenges.
        </p>
      </section>
      <section className="mt-6 xl:mt-8 col-span-2 md:col-span-3">
        <hr />
        <div className="grid grid-cols-2 items-center mt-2 sm:ml-[10%] md:ml-0">
          <div className="navlinks w-96">
            <Link to="/works">
              <Button>Works</Button>
            </Link>
            <Link to="/services">
              <Button>Services</Button>
            </Link>
            <Link to="/jobs">
              <Button>Jobs</Button>
            </Link>
            <Link to="/about">
              <Button>About</Button>
            </Link>
          </div>
          <img
            src={footnote}
            alt="2022 India"
            className="justify-self-end hidden md:inline pr-4"
          />
        </div>
      </section>
    </div>
  );
}
