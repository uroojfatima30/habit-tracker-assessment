# Weekly Habit Tracker

A lightweight, responsive, single-page web application designed to help users track their daily habits across dynamic weekly intervals, complete with automatic streak tracking and local state retention.

## Features
- **Dynamic Weekly Grid:** Displays a stable 7-day matrix tracking Monday through Sunday based on target reference frames.
- **Persistent State:** Saves habits and checked history automatically using browser `localStorage` so tracking data survives full page reloads.
- **Weekly Navigation:** Fluidly toggle backwards or forwards to evaluate past or upcoming weeks, with an instant shortcut back to the current week.
- **Information Design:** Highlighted focus states to cleanly emphasize the current calendar day alongside a responsive layout that automatically scales gracefully onto mobile viewport displays.

## Technical Stack
- HTML5 (Semantic Structure)
- CSS3 (Responsive Grid Layouts & Visual Accents)
- JavaScript (Vanilla DOM Manipulation & Date Arithmetic Engine)

## How to Run the Project Locally

### Option 1: Direct File Execution
1. Download or clone this project repository to your local directory.
2. Locate the root folder and double-click the `index.html` file.
3. The application will immediately launch and render in your default web browser. No installation or compiler runtimes are required.

### Option 2: VS Code Live Server (Recommended)
1. Open the project root directory inside Visual Studio Code.
2. Ensure you have the **Live Server** extension installed.
3. Right-click on `index.html` in the file explorer panel and select **"Open with Live Server"**.
4. The local development environment will automatically launch on `http://127.0.0.1:5500`.

