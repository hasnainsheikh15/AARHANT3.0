//

const lenis = new Lenis({
  duration: 1.5, // Adjust the duration to make scrolling slower
  easing: (t) => t * (2 - t), // Optional: Custom easing function for smoother scrolling
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

//loader

const txtarr1 = "WELCOME🤖".split("");
const txtarr2 = "TO".split("");
const txtarr3 = "CYBERVERSE".split("");
console.log(txtarr1);

const loadtxt1 = document.querySelector("#loadtxt1");
const loadtxt2 = document.querySelector("#loadtxt2");
const loadtxt3 = document.querySelector("#loadtxt3");
const counter = document.querySelector("#count");
console.log(loadtxt1);

let count = 0;

setInterval(() => {
  if (count == 100) {
    clearInterval();
    return;
  } else {
    count++;
    counter.innerHTML = count + "%";
  }
}, 50);

txtarr1.forEach((e) => {
  const span = document.createElement("span");
  span.textContent = e;
  loadtxt1.appendChild(span);
});
txtarr2.forEach((e) => {
  const span = document.createElement("span");
  span.textContent = e;
  loadtxt2.appendChild(span);
});
txtarr3.forEach((e) => {
  const span = document.createElement("span");
  span.textContent = e;
  loadtxt3.appendChild(span);
});

function loadinganimate() {
  let tl = gsap.timeline();
  tl.from("#loadimg", {
    width: "0%",
    duration: 0.3,
  });
  tl.to(
    "#loadtxt1 span",
    {
      color: "black",
      // duration: 3,
      ease: "elastic",

      stagger: 0.05,
    },
    "a"
  );
  tl.from("#loadtxt2 span", {
    opacity: 0,
    // duration: 3,
    ease: "elastic",

    stagger: 0.05,
  });
  tl.to("#loadtxt3 span", {
    color: "black",
    // duration: 3,
    ease: "elastic",

    stagger: 0.05,
  });
  tl.to(".loadtxt span ", {
    opacity: 0,
    stagger: 0.1,
  });
  tl.to("#loadimg ", {
    height: "0%",
    ease: "elastic",
  });

  tl.to(
    ".slide",
    {
      height: "0%",
      stagger: 0.1,
    },
    "s"
  );
  tl.to(
    "#count",
    {
      display: "none",
    },
    "s"
  );
  tl.from(
    ".wrapper",
    {
      display: "hidden",
      ease: "power4",
    },
    "s"
  );
  // tl.from(
  //   ".wrapper",
  //   {
  //     y: -100,
  //   },
  //   "s"
  // );

  tl.from(
    ".aspect-square",
    {
      opacity: 0,
      y: 20,
    },
    "b"
  );
  tl.from(
    ".utextcont div ",
    {
      opacity: 0,
      y: 20,
      stagger: 0.3,
    },
    "b"
  );
  //image animate

  // let aspectSquare = document.querySelectorAll(".aspect-square");

  // aspectSquare.forEach((elem) => {
  //   let image = elem.querySelector("img");

  //   tl.from(image, {
  //     opacity: 0,
  //     y: 20,
  //   });
  // });
}

loadinganimate();

//section 1

let aspectSquare = document.querySelectorAll(".aspect-square");

aspectSquare.forEach((elem) => {
  let image = elem.querySelector("img");
  let tl = gsap.timeline();

  let xTransform = gsap.utils.random(-100, 100);

  tl.set(
    image,
    {
      transformOrigin: `${xTransform < 0 ? 0 : "100%"}`,
    },
    "start"
  )
    .to(
      image,
      {
        scale: 0,
        duration: 0.5,
        ease: "none",
        scrollTrigger: {
          trigger: image,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      },
      "start"
    )
    .to(
      elem,
      {
        xPercent: xTransform,
        duration: 0.5,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: image,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      },
      "start"
    );
});
