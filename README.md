# REST Countries API 🌍

This is a simple "for fun" project I created to practice programming. My main goal here was to learn and get more comfortable working with **React** and fetching data from a **REST API**.

It's a small frontend application that displays basic information about different countries around the world.

## 🚀 Features

Here is what the application can do right now:
* **Country List:** Displays a grid of countries with their flags and key details (population, region, capital).
* **Region Filter:** Users can filter the displayed countries by specific continents.
* **Theme Toggle:** Includes a Dark/Light mode switch to improve user experience.
* **Details Page (Work in progress):** Clicking on a country opens a separate view for more detailed information.

## 💻 Tech Stack

* **Frontend:** React (Vite), JavaScript, HTML, CSS
* **Backend / Database:** `json-server` (Local REST API)

## ⚙️ How to run this project locally

If you want to test this project on your computer, just follow these easy steps:

1. **Download the project** (clone the repository) to your local machine.
2. Open your terminal in the main project folder and install the root packages:
   ```bash
   npm install
3. Go to the backend folder and install its packages
   ```bash
   cd backend
   npm install
   npm install json-server
4. Now, go to the frontend folder and install its packages too:
   ```bash
   cd ../frontend
   npm install
5. Finally, go back to the main folder and start the whole app. This single command will run both the frontend and the backend at the same time:
   ```bash
   cd ..
   npm run dev
