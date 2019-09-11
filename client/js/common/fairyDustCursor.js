/*!
 * Fairy Dust Cursor.js
 * - 90's cursors collection
 * -- https://github.com/tholman/90s-cursor-effects
 * -- http://codepen.io/tholman/full/jWmZxZ/
 */

const possibleColors = ["#D61C59", "#E7D84B", "#1B8798"];
let cursor = { x: 0, y: 0 };
const particles = [];
let shouldRun = false;
const DEBUG = false;
let rafId = null;

function log(...args) {
  DEBUG && console.log(...args); /* eslint-disable-line no-console */
}

function init() {
  if (shouldRun === true) {
    // stop();
    console.warn("You already have fairy dust!");
  }
  else {
    // make sure we don't rAF more than once
    window.cancelAnimationFrame(rafId);
    start();
  }
}

function destroy() {
  if (shouldRun === false) {
    console.warn("fairy dust is not attached!");
  }
  stop();
}

function loop() {
  // if there are particles
  if (shouldRun || particles.length > 0) {
    rafId = window.requestAnimationFrame(loop);
  }
  else {
    log("done looping");
  }
  updateParticles();
}

function stop() {
  log("stop");
  shouldRun = false;
  unbindEvents();
}

function start() {
  log("start");
  shouldRun = true;
  bindEvents();
  loop();
}

// Bind events that are needed
function bindEvents() {
  document.addEventListener("mousemove", onMouseMove);
}

function unbindEvents() {
  document.removeEventListener("mousemove", onMouseMove);
}

function onMouseMove(e) {
  cursor.x = e.clientX + window.scrollX;
  cursor.y = e.clientY + window.scrollY;

  addParticle(
    cursor.x,
    cursor.y,
    possibleColors[Math.floor(Math.random() * possibleColors.length)]
  );
}

function addParticle(x, y, color) {
  var particle = new Particle();
  particle.init(x, y, color);
  particles.push(particle);
}

function updateParticles() {
  // Updated
  for (var i = 0; i < particles.length; i++) {
    particles[i].update();
  }

  // Remove dead particles
  for (var j = particles.length - 1; j >= 0; j--) {
    if (particles[j].lifeSpan < 0) {
      particles[j].die();
      particles.splice(j, 1);
    }
  }
}

/**
 * Particles
 */
const LIFESPAN = 120;

function Particle() {
  this.character = "*";
  this.lifeSpan = LIFESPAN; //ms
  this.initialStyles = {
    position: "absolute",
    display: "block",
    pointerEvents: "none",
    "z-index": "10000000",
    fontSize: "48px",
    "will-change": "transform"
  };

  // Init, and set properties
  this.init = function(x, y, color) {
    this.velocity = {
      x: (Math.random() < 0.5 ? -1 : 1) * (Math.random() / 2),
      y: 1
    };

    this.position = { x: x - 10, y: y - 20 };
    this.initialStyles.color = color;

    this.element = document.createElement("span");
    this.element.innerHTML = this.character;
    applyProperties(this.element, this.initialStyles);
    this.update();

    document.body.prepend(this.element);
  };

  this.update = function() {
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
    this.lifeSpan--;

    this.element.style.transform =
      "translate3d(" +
      this.position.x +
      "px," +
      this.position.y +
      "px,0) scale(" +
      this.lifeSpan / LIFESPAN +
      ")";
  };

  this.die = function() {
    this.element.parentNode.removeChild(this.element);
  };
}

/**
 * Utils
 */

// Applies css `properties` to an element.
function applyProperties(target, properties) {
  for (var key in properties) {
    target.style[key] = properties[key];
  }
}

export default {
  init,
  destroy
};
