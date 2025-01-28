export function scaleBoundingBox(bbox, scaleFactor) {
    return bbox.map(coord => coord * scaleFactor);
  }
  