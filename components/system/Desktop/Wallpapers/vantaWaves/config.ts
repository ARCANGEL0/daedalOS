import { type VantaWavesConfig } from "components/system/Desktop/Wallpapers/vantaWaves/types";

export const config: VantaWavesConfig = {
  camera: {
    far: 600,
    fov: 20,
    near: 0.1,
  },
  color: "rgba(8,8,8,0.9)",
  colorCycleSpeed: 0,
  forceAnimate: true,
  hh: 60,
  hue: 225,
  lightness: 15,
  material: {
    options: {
      fog: false,
      wireframe: true,
    },
  },
  saturation: 40,
  shininess: 50,
  waveHeight: 80,
  waveSpeed: 0.45,
  ww: 10,
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
