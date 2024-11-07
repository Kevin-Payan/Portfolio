<script>
export default {
  mounted() {
    const typedText = this.$el.querySelector(".typed-text");
    const cursor = this.$el.querySelector(".cursor");

    const textArray = [
      "Software Engineer",
      "Full Stack Developer",
      "Tutor",
      "Learner",
      "Problem Solver",
      "Freelancer",
      "lot of things...",
    ];

    let textArrayIndex = 0;
    let charIndex = 0;

    const erase = () => {
      if (charIndex > 0) {
        cursor.classList.remove("blink");
        typedText.textContent = textArray[textArrayIndex].slice(
          0,
          charIndex - 1
        );
        charIndex--;
        setTimeout(erase, 80);
      } else {
        cursor.classList.add("blink");
        textArrayIndex++;
        if (textArrayIndex > textArray.length - 1) {
          textArrayIndex = 0;
        }
        setTimeout(type, 1000);
      }
    };

    const type = () => {
      if (charIndex <= textArray[textArrayIndex].length - 1) {
        cursor.classList.remove("blink");
        typedText.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, 120);
      } else {
        cursor.classList.add("blink");
        setTimeout(erase, 1000);
      }
    };

    document.addEventListener("DOMContentLoaded", () => {
      type();
    });
  },
};
</script>

<template>
  <div
    class="flex flex-col justify-center w-screen h-screen items-center bg-black"
  >
    <h1 class="text-4xl font-semibold text-white p-2">
      Hello, I'm <span class="text-red-600">Kevin.</span>
    </h1>
    <p class="text-4xl font-semibold text-white">
      I'm a <span class="typed-text"></span
      ><span class="cursor blink">&nbsp;</span>
    </p>
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Itim&family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Tiny5&display=swap");

:root {
  --itim: "Itim", cursive;
  --dark: #1c1c1c;
  --light: #c4c4c4;
  --red: #ca172c;
}

.typed-text {
  color: var(--red);
  font-family: var(--itim);
}

.cursor {
  display: inline-block;
  width: 3px;
  margin-left: 4px;
  background: var(--red);
}

.cursor.blink {
  animation: blink 0.8s ease-in-out infinite;
}

@keyframes blink {
  0%,
  100% {
    background: var(--red);
  }
  40%,
  50% {
    background: transparent;
  }
}
</style>
