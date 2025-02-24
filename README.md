# Real-Time Streaming Application

A real-time streaming application that allows you to stream media by simply pasting your RTMP server key. The application captures media on the client side, converts it to binary, sends it to the backend using **Socket.IO**, and streams it to an RTMP server using **FFmpeg**.

---

## Features
- **Easy RTMP Connection**: Just paste your RTMP server key and start streaming.
- **Real-Time Media Capture**: Captures media (audio/video) directly from the client side.
- **Efficient Streaming**: Uses FFmpeg to encode and stream media to the RTMP server.
- **Scalable Architecture**: Built with **Node.js** and **Socket.IO** for real-time communication.

---

## Architecture
1. **Client Side**:
   - Captures media using the browser's `MediaRecorder` API.
   - Converts media to binary chunks and sends them to the backend via **Socket.IO**.

2. **Backend**:
   - Receives binary data using **Socket.IO**.
   - Uses **FFmpeg** to process and stream the media to the RTMP server.

---

## Tech Stack
- `MediaRecorder` API,  Node.js, Express, Socket.IO, FFmpeg, RTMP, Docker
