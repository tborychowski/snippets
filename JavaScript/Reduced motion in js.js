const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const ANIMATION_SPEED = (!reducedMotion || reducedMotion.matches) ? 0 : 300;
