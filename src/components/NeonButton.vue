<script>
//Here goes the script xd
</script>

<template>
  <div class="flex justify-center">
    <button class="neon-button neon-button__3">Get to know me</button>
  </div>
</template>

<style>
:root {
  --clr-three: rgb(0, 255, 225);
  --clr-bg: #1d1e22;
}

body {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: var(--clr-bg);
  font-family: "Balsamiq Sans", cursive;
  overflow: hidden;
}

.neon-button {
  font-size: 1rem;

  display: inline-block;
  cursor: pointer;
  text-decoration: none;
  padding: 0.5em 1em;
  margin: 2rem;
  border-radius: 0.25em;
  position: relative;
}

.neon-button__3 {
  color: var(--clr-three);
  border: var(--clr-three) 0.125em solid;
  text-shadow: 0 0 0.125em hsl(0 0% 100% / 0.3), 0 0 0.45em --clr-three;
  box-shadow: inset 0 0 0.5em 0 var(--clr-three), 0 0 0.5em 0 var(--clr-three);
}

.neon-button::before {
  content: "";
  position: absolute;
  top: 120%;
  left: 0;
  width: 100%;
  height: 100%;
  transform: perspective(1.5em) rotateX(45deg) scale(0.8, 0.3);
  filter: blur(1.5em);
  opacity: 0.7;
  pointer-events: none;
}

.neon-button.active::before {
  animation: scalingShadow 0.5s ease-in-out;
}

@keyframes scalingShadow {
  0% {
    top: 120%;
    transform: perspective(1.5em) rotateX(45deg) scale(0.8, 0.3);
  }
  50% {
    top: 165%;
    transform: perspective(1.5em) rotateX(45deg) scale(0.75, 0.3);
  }
  100% {
    top: 120%;
    transform: perspective(1.5em) rotateX(45deg) scale(0.8, 0.3);
  }
}

.neon-button__3::before {
  background: var(--clr-three);
}

.neon-button::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  opacity: 0;
  z-index: -1;
  transition: opacity 100ms linear;
}

.neon-button__3::after {
  box-shadow: 0 0 2em 0.5em var(--clr-three);
  background-color: var(--clr-three);
}

.neon-button:hover::before,
.neon-button:focus::before {
  opacity: 1;
}

.neon-button:hover::after,
.neon-button:focus::after {
  opacity: 1;
}

.neon-button:hover,
.neon-button:focus {
  outline: none;
  color: var(--clr-bg);
  text-shadow: none;
}

.active {
  animation: animate 0.5s ease-in-out;
}

@keyframes animate {
  0% {
    transform: translateY(0%);
  }
  50% {
    transform: translateY(-40%);
  }
  100% {
    transform: translateY(0%);
  }
}
</style>
