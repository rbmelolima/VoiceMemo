import Controller from "./controller.mjs";
import View from "./view.mjs";
import Media from './utils/media.mjs';
import Recorder from './utils/recorder.mjs';

const view = new View();
const media = new Media();
const recorder = new Recorder();

Controller.initialize({
  view, media, recorder
})