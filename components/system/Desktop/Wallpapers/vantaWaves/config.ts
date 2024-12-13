import { type VantaWavesConfig } from "components/system/Desktop/Wallpapers/vantaWaves/types";

export const config: VantaWavesConfig = {
  camera: {
    far: 400,
    fov: 30,
    near: 0.1,
  },
  color: "rgb(20,20,20)",
  colorCycleSpeed: 0,
  forceAnimate: true,
  hh: 50,
  hue: 225,
  lightness: 20,
  material: {
    options: {
      fog: false,
      wireframe: true,
    },
  },
  saturation: 40,
  shininess: 35,
  waveHeight: 50,
  waveSpeed: 0.55,
  ww: 50,
};

export const disableControls = {
  gyroControls: false,
  mouseControls: false,
  mouseEase: false,
  touchControls: false,
};

export const libs = [
  "/System/Vanta.js/three.min.js",
  "/System/Vanta.js/vanta.waves.min.js",
];