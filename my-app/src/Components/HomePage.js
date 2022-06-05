import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import pics from "./assets/images";
import Input from "@mui/material/Input";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";

export default function HomePage() {
  const anchor = () => {
    window.scroll({
      top: 808,
      behavior: "smooth",
    });
  };

  const nameRef = useRef();
  useEffect(() => {
    gsap.from(nameRef.current, { y: "-200", duration: "1.2" });
  });

  return (
    <div className="snap-mandatory snap-y">
      {/* Main Block */}
      <div className="container snap-start grid grid-cols-1 md:grid-cols-2 md:bg-slate-50 md:dark:bg-zinc-900 md:my-6 md:rounded-3xl duration-200">
        <div className="xl:pl-20 lg:pl-16 md:pl-12 md:pr-0 sm:px-10 px-8 xl:pt-12 lg:pt-10 md:pt-8 pt-6">
          <div className="md:hidden grid justify-items-end bg-gray-100 dark:bg-zinc-900 mb-16 mt-6 rounded-2xl">
            <img src={pics.me} alt="mr.Maniac" className="w-[94%]" />
          </div>

          <section className="flex justify-between lg:w-36 w-32 md:m-0 my-6">
            <img src={pics.mail} alt="mail" id="mail" />
            <img src={pics.twitter} alt="twitter" id="twitter" />
            <img src={pics.insta} alt="instagram" id="insta" />
          </section>

          <img
            src={pics.name}
            id="name"
            alt="Yuvraj Goyal"
            ref={nameRef}
            className="2xl:mt-72 xl:mt-48 lg:mt-36 md:mt-14 w-[82%]"
          />
          <p className="montserrat xl:text-xl lg:text-lg text-sm text-slate-700 dark:text-gray-200 my-3">
            A tech enthusiast, web developer, investor and some times a college
            student too. I excel in <b>UI Design.</b>
          </p>
          <button
            className="gradientButton xl:text-xl lg:text-lg text-sm xl:w-60 lg:w-56 md:w-40 sm:w-44 w-36 lg:h-14 h-10 lg:my-6 md:my-2 my-4 rounded-3xl"
            onClick={anchor}
          >
            Connect With Me
          </button>
        </div>
        <div className="grid justify-items-end items-end">
          <img
            src={pics.me}
            alt="mr.Maniac"
            ref={nameRef}
            className="hidden md:inline w-[96%]"
          />
        </div>
      </div>

      {/* Connect Block */}
      <div className="container snap-start grid grid-cols-1 gap-y-6 md:grid-cols-[7fr_7fr_5fr] md:gap-y-0 border-y-4 border-dashed border-slate-400 dark:border-slate-800 md:border-none md:h-[36rem] lg:h-[44rem] xl:h-[52rem] 2xl:h-[56rem] my-6 py-8 px-8">
        <img
          src={pics.build}
          alt=""
          id="letsBuild"
          className="hidden row-span-2 md:inline xl:w-[574px] m-auto xl:ml-8 2xl:ml-12"
        />
        <section className="flex md:justify-center row-span-2">
          <div
            className="banner w-[70%] md:w-[80%] xl:w-80 2xl:w-[400px] lg:h-64 xl:h-80 2xl:h-72 lg:p-8 p-6 lg:rounded-[40px] rounded-3xl"
            style={{
              background: "linear-gradient(90deg, #8800f0 28%, #5828f0 98.83%)",
            }}
          >
            <h2 className="mb-2 text-2xl lg:text-3xl xl:text-4xl">Hire me.</h2>
            <p className="xl:text-xl lg:text-base text-xs">
              You can hire me as a UI/UX Designer, front-end Web Developer and a
              Product Designer. I can also assist you with your technical needs.
            </p>
            <img
              src={pics.ArrowButton}
              alt="Know More"
              className="w-6 lg:w-8 xl:w-10 absolute right-6 bottom-6"
            />
            <img
              src={pics.HirePNG}
              alt="Hire me"
              className="md:hidden lg:inline absolute -right-20 top-10 lg:left-8 lg:-top-14 lg:right-auto"
            />
          </div>
        </section>
        <section className="grid md:justify-items-center">
          <div className="banner grid justify-self-end md:justify-self-auto w-[70%] md:w-[110%] xl:w-80 2xl:w-[400px] lg:h-64 xl:h-80 2xl:h-72 lg:p-8 p-6 mb-4 lg:rounded-[40px] rounded-3xl">
            <h2 className="mb-2 text-2xl lg:text-3xl xl:text-4xl">Join me.</h2>
            <p className="xl:text-xl lg:text-base text-xs">
              Are you an Android Developer or a Graphic Designer? Do you
              specialise in Augmented Reality? If yes, I am pleased to invite
              you to join me.
            </p>
            <img
              src={pics.ArrowButton}
              alt="Know More"
              className="w-6 lg:w-8 xl:w-10 absolute right-6 bottom-6"
            />
            <img
              src={pics.JoinPNG}
              alt="Join me"
              className="md:hidden lg:inline absolute -left-24 top-12 lg:left-auto lg:top-auto lg:right-8 lg:-bottom-14"
            />
          </div>
        </section>
        <section className="grid md:justify-items-center">
          <div className="banner w-[70%] md:w-[110%] xl:w-80 2xl:w-[400px] lg:h-64 xl:h-80 2xl:h-72 lg:p-8 p-6 lg:rounded-[40px] rounded-3xl">
            <h2 className="mb-2 text-2xl lg:text-3xl xl:text-4xl">Colab.</h2>
            <p className="xl:text-xl lg:text-base text-xs">
              Do you have an idea? Something which I can help you in? Lets come
              together and shape our ideas into reality. Sounds awsm?
            </p>
            <img
              src={pics.ArrowButton}
              alt="Know More"
              className="w-6 lg:w-8 xl:w-10 absolute right-6 bottom-6"
            />
            <img
              src={pics.CollabPNG}
              alt="Colab"
              className="md:hidden lg:inline absolute -right-24 top-8 lg:top-auto lg:right-auto lg:-left-20 lg:bottom-4"
            />
          </div>
        </section>
      </div>

      {/* Website Feedback */}
      <div className="container snap-start md:flex md:justify-evenly items-center h-32 lg:px-14 px-6 mt-14 mb-8 md:mt-0">
        <img
          src={pics.LikeTheWebsite}
          alt="Liking the website?"
          className="w-72 lg:w-[28rem] 2xl:w-[714px] 2xl:h-[71px] ml-2 my-2 md:my-auto"
        />
        <FormControl variant="standard" sx={{ m: 1, mt: 3 }}>
          <Input
            id="feedbackForm"
            className="bg-indigo-100 dark:bg-violet-900 dark:text-white border-b-4 xl:border-b-8 border-[#8800f0] w-[100%] md:w-72 lg:w-[28rem] 2xl:w-[600px] rounded-xl rounded-b-none px-4"
            inputProps={{
              "aria-label": "Leave a comment",
            }}
          />
          <FormHelperText id="helper-text">Leave a comment ↵</FormHelperText>
        </FormControl>
      </div>
    </div>
  );
}
