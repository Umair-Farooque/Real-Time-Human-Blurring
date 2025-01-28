import { startVideoStream } from './video.js';
import { loadModel, detectPersons } from './detection.js';
import { applyBlur } from './blur.js';

const videoElement = document.getElementById('video');
const canvasElement = document.getElementById('canvas');
const context = canvasElement.getContext('2d');

// Initialize the app
async function init() {
  try {
    await startVideoStream(videoElement);
    const model = await loadModel();
    console.log('Model loaded');

    // Start detection and processing
    detectPersons(videoElement, canvasElement, context, model, applyBlur);
  } catch (error) {
    console.error('Error initializing app:', error);
  }
}

init();
