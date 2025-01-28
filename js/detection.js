import * as cocoSsd from '@tensorflow-models/coco-ssd';
import * as tf from '@tensorflow/tfjs';

export async function loadModel() {
  try {
    const model = await cocoSsd.load();
    console.log('Model loaded successfully');
    return model;
  } catch (error) {
    console.error('Error loading model:', error);
    throw new Error('Failed to load the detection model.');
  }
}

export function detectPersons(video, canvas, context, model, onDetection) {
  // Set canvas dimensions to match video
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;

  async function processFrame() {
    // Draw video frame on canvas
    context.drawImage(video, 0, 0, canvas.width, canvas.height);

    // Convert canvas frame to Tensor
    const frame = tf.browser.fromPixels(canvas);

    // Run model inference
    const predictions = await model.detect(frame);

    // Pass detections to the callback (e.g., for blurring)
    onDetection(predictions, context);

    // Dispose Tensor to free memory
    frame.dispose();

    // Process the next frame
    requestAnimationFrame(processFrame);
  }

  processFrame();
}
