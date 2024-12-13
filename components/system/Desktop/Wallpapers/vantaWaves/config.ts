import { type VantaWavesConfig } from "components/system/Desktop/Wallpapers/vantaWaves/types";

export const config: VantaWavesConfig = {
  camera: {
    far: 400,
    fov: 30,
    near: 0.1,
  },
  color: "rgb(8,8,8)",
  colorCycleSpeed: 1000000,
  forceAnimate: false,
  hh: 50,
  hue: 0,
  lightness: 20,
  material: {
    options: {
      fog: false,
      wireframe: true,
    },
  },
  saturation: 0,
  shininess: 35,
  waveHeight: 70,
  waveSpeed: 0.35,
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