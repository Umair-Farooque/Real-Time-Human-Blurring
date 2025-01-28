export async function startVideoStream(videoElement) {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
      videoElement.srcObject = stream;
  
      return new Promise((resolve) => {
        videoElement.onloadedmetadata = () => {
          console.log("Video stream started successfully");
          resolve();
        };
      });
    } catch (error) {
      console.error('Error accessing webcam:', error);
      alert('Unable to access the webcam. Check permissions and ensure a webcam is connected.');
      throw error;
    }
  }
  