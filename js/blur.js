export function applyBlur(predictions, context) {
    predictions.forEach(({ bbox, class: label, score }) => {
      if (label === 'person' && score > 0.5) {
        const [x, y, width, height] = bbox;
  
        // Extract region to blur
        const region = context.getImageData(x, y, width, height);
  
        // Apply a simple blur algorithm
        blurRegion(region);
  
        // Draw the blurred region back onto the canvas
        context.putImageData(region, x, y);
      }
    });
  }
  
  function blurRegion(imageData) {
    const { data, width, height } = imageData;
  
    // Simple box blur implementation
    const kernelSize = 5; // Size of the blur kernel
    const tempData = new Uint8ClampedArray(data);
  
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        let r = 0, g = 0, b = 0, count = 0;
  
        // Sum pixel values in the kernel area
        for (let ky = -kernelSize; ky <= kernelSize; ky++) {
          for (let kx = -kernelSize; kx <= kernelSize; kx++) {
            const ny = y + ky;
            const nx = x + kx;
  
            if (nx >= 0 && nx < width && ny >= 0 && ny < height) {
              const index = (ny * width + nx) * 4;
              r += tempData[index];
              g += tempData[index + 1];
              b += tempData[index + 2];
              count++;
            }
          }
        }
  
        // Compute average color
        const i = (y * width + x) * 4;
        data[i] = r / count;
        data[i + 1] = g / count;
        data[i + 2] = b / count;
      }
    }
  }
  