# Real-Time Person Blur Web App

This project is a web application that detects a person in real-time using a webcam and applies a blur effect to them. It uses **MediaPipe** for person detection and **StackBlur** for applying the blur effect.

---

## Features

- Real-time video streaming from the user's webcam.
- Person detection using MediaPipe's BlazePose model.
- Blur effect applied to the detected person.
- Simple and intuitive user interface.

---

## Technologies Used

- **Frontend**: HTML, CSS, JavaScript
- **Machine Learning**: MediaPipe (BlazePose)
- **Blurring**: StackBlur
- **Webcam Access**: WebRTC (`getUserMedia` API)

## Setup Instructions

### Prerequisites

- A modern web browser (Chrome, Firefox, Edge, etc.).
- A webcam for real-time video input.

### Steps to Run the Project

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/Umair-Farooque/real-time-person-blur.git
   cd real-time-person-blur
   ```

2. **Open the Project**:
   - Open the `index.html` file in your browser.

3. **Start the App**:
   - Click the "Start" button to access your webcam.
   - The app will detect the person and apply a blur effect in real-time.

4. **Stop the App**:
   - Click the "Stop" button to stop the webcam feed.

---

## Code Structure

- **`index.html`**: The main HTML file containing the video and canvas elements.
- **`app.js`**: The JavaScript file containing the logic for webcam access, person detection, and blurring.
- **`README.md`**: This file.

---

## How It Works

1. **Webcam Access**:
   - The app uses the `getUserMedia` API to access the user's webcam and display the video stream.

2. **Person Detection**:
   - MediaPipe's BlazePose model is used to detect the person in the video stream. It provides landmarks for the detected person.

3. **Blur Effect**:
   - The detected region (bounding box) is extracted, and a blur effect is applied using the StackBlur library.

4. **Real-Time Processing**:
   - The video stream is processed frame-by-frame, and the blur effect is applied in real-time.

---

## Customization

- **Blur Intensity**: Adjust the blur radius in the `StackBlur.imageData` function in `app.js`.
- **Model Complexity**: Modify the `modelComplexity` option in the `pose.setOptions` function to improve detection accuracy or performance.

---

## Limitations

- The app may struggle with low-light conditions or multiple people in the frame.
- Performance may vary depending on the device and browser.

---

## Future Improvements

- Add support for blurring multiple people.
- Allow users to adjust the blur intensity via a slider.
- Optimize performance for lower-end devices.

---

## License

This project is licensed under the MIT License.

---

## Acknowledgments

- [MediaPipe](https://mediapipe.dev/) for the BlazePose model.
- [StackBlur](https://github.com/flozz/StackBlur) for the blurring algorithm.

---

## Contact

For questions or feedback, feel free to reach out:  
- **Your Name**  
- **Email**: umairkiller333@gmail.com  

---

Enjoy blurring people in real-time! 🚀

---

Let me know if you need further assistance! 😊
