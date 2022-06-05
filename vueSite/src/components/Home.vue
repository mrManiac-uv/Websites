<script>
import { gsap } from "gsap";

export default {
  name: "Home",
  setup() {
    const right = (el) => {
      el.style.opacity = 0;
      el.style.transform = "translateX(20px)";
    };
    const left = (el) => {
      el.style.opacity = 0;
      el.style.transform = "translateX(-20px)";
    };
    const down = (el) => {
      el.style.opacity = 0;
      el.style.transform = "translateY(60px)";
    };
    const enter = (el) => {
      var t1 = gsap.timeline();
      t1.to(el, {
        opacity: 1,
        x: 0,
        y: 0,
        duration: 1,
        ease: "Power4.easeInOut",
        delay: 0.2,
      });
    };
    return { right, left, down, enter };
  },
};
</script>

<template>
  <div class="bg-black py-12 h-screen">
    <div class="grid justify-items-center">
      <img src="../assets/logo.png" class="w-16" alt="" />
    </div>
    <div class="grid lg:grid-cols-2 mx-12 2xl:mx-52 my-20 2xl:my-24 h-96">
      <section class="h-72">
        <img src="../assets/vector.png" class="h-56 mx-auto" alt="" />

        <div class="navs w-80 mx-auto h-0">
          <transition appear @before-enter="right" @enter="enter">
            <button
              class="bg-white w-20 h-8 border-none rounded-lg font-bold text-md relative -top-44 left-8"
            >
              Works
            </button>
          </transition>
          <transition appear @before-enter="left" @enter="enter">
            <button
              class="bg-white w-20 h-8 border-none rounded-lg font-bold text-md relative -top-32 left-12"
            >
              Skills
            </button>
          </transition>
          <transition appear @before-enter="right" @enter="enter">
            <button
              class="bg-white w-20 h-8 border-none rounded-lg font-bold text-md relative -top-20 -left-32"
            >
              About
            </button>
          </transition>
          <img
            src="../assets/Hand.png"
            class="w-20 -rotate-45 relative -top-20 left-56"
            alt=""
          />
        </div>

        <button
          class="w-40 h-12 border-4 border-violet-700 rounded-2xl font-bold text-white text-xl"
        >
          Lets Talk!
        </button>
      </section>
      <transition appear @before-enter="down" @enter="enter">
        <section class="punch flex flex-col justify-center my-12">
          <h1
            :style="{ fontFamily: 'Poppins' }"
            class="text-white text-2xl 2xl:text-5xl text-left font-bold leading-9 2xl:leading-[4rem]"
          >
            Where sites get sexier and interactions become beautiful
          </h1>
          <h3
            :style="{ fontFamily: 'Poppins' }"
            class="text-violet-700 text-xl xl:text-3xl text-left font-bold italic mt-4 2xl:mt-8"
          >
            meet Yuvraj Goyal
          </h3>
        </section>
      </transition>
      <section class="hidden">
        <img src="../assets/vector.png" class="relative left-80" alt="" />
        <Button text="Works"></Button>
      </section>
    </div>
    <div>
      <svg
        class="mx-auto mt-36 w-8"
        height="100%"
        viewBox="0 0 247 390"
        version="1.1"
        style="
          fill-rule: evenodd;
          clip-rule: evenodd;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-miterlimit: 1.5;
        "
      >
        <path
          id="wheel"
          d="M123.359,79.775l0,72.843"
          style="fill: none; stroke: #fff; stroke-width: 48px"
        />
        <path
          id="mouse"
          d="M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z"
          style="fill: none; stroke: #fff; stroke-width: 20px"
        />
      </svg>
    </div>
  </div>
  
</template>

<style scoped>
@keyframes scroll {
  0% {
    transform: translateY(0);
  }
  30% {
    transform: translateY(100px);
  }
}

svg #wheel {
  animation: scroll ease 1.5s infinite;
}

span:after {
  content: " ";
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
  background: black;
  z-index: 1;
  transform-origin: 100% 0;
}
</style>
