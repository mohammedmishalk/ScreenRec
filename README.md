# ScreenCam Recorder

**Project Description**: ScreenCam Recorder is a web application that allows users to easily record their screen activities and webcam feed simultaneously.

## Table of Contents

- [Installation](#installation)
- [Recording](#recording)
- [User Authentication](#user-authentication)
- [Responsive Design](#responsive-design)
- [Tech Stack](#tech-stack)

## Installation

To run the ScreenCam Recorder application on your local machine, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/mohammedmishalk/ScreenCam-Recorder.git
   cd ScreenCam-Recorder
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the development server:

   ```bash
   npm start
   ```

4. Open your web browser and go to `http://localhost:5173/` to access the application.

## Recording

ScreenCam Recorder provides a user-friendly interface for recording screen activities and webcam feed simultaneously. Here are the key features:

- Users can start and stop recording with the click of a button.
- Both screen and webcam feed are captured in the recording.
- The recording can be previewed in the application itself after stopping.
- Users can download the recording in a common video format.

## User Authentication

The application implements user authentication to ensure secure access to recording features. Users must log in before they can start recording.

## Responsive Design

ScreenCam Recorder is designed with responsiveness in mind. The user interface adapts smoothly to different screen sizes, making it convenient to use on both desktop and mobile devices.

## Tech Stack

ScreenCam Recorder leverages the following technologies and libraries:

- **React**: The frontend is built using React, a powerful JavaScript library for building user interfaces.

- **React Router**: For managing different routes and navigation within the application.

- **react-media-recorder**: This library handles the recording functionality, allowing users to capture both screen and webcam feed.

- **Node.js**: The backend is built using Node.js, which enables handling user authentication and serving the frontend.

- **Express.js**: A web application framework for Node.js, used to create the backend API endpoints.

- **MongoDB**: As a NoSQL database, MongoDB is used to store user information and recording metadata.

- **JWT Authentication**: JSON Web Tokens (JWT) are used for user authentication and securing API endpoints.

- **Tailwind CSS**: A utility-first CSS framework for styling the user interface with responsive design.

By utilizing this tech stack, ScreenCam Recorder delivers a seamless recording experience for users, with secure authentication and a user-friendly interface.