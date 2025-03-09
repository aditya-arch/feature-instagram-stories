# Instagram Stories Feature

A simplified version of Instagram Stories built with **Vite + React** and TypeScript, optimized for mobile devices with a clean, white UI and smooth transitions.

---

## Overview

- **Project Purpose:**
  - Replicates key aspects of Instagram Stories.
  - Features a horizontally scrollable list of story previews with a gradient ring.
  - Provides a full-screen story viewer with auto-advance and manual navigation.
  - Uses HD images from a JSON file.
- **Technologies:**
  - **Vite + React**, TypeScript, and CSS.
  - Testing with React Testing Library, Chai, and Cypress for E2E tests.

---

## Features

- **Stories List:**
  - Displays four story previews (circular thumbnails with a gradient border).
  - Implements horizontal scrolling for mobile devices.
- **Story Viewer:**
  - Opens as a full-screen overlay when a story is clicked.
  - Auto-advances to the next story after a set duration (adjustable; currently 4 seconds).
  - Supports manual navigation by tapping on the left/right sides.
  - Pauses auto-advance on hover/touch.
- **Image Sources:**
  - HD images provided via a JSON mock using Picsum Photos (1080x1920 resolution).
- **Performance:**
  - Lazy loading of images.
  - Components wrapped in `React.memo` to avoid unnecessary re-renders.
- **Testing:**
  - **Unit Tests:** Verify component rendering and behavior.
  - **E2E Tests (Cypress):** Check core functionalities like opening the story viewer and navigating between stories.

---

## Installation

- **Clone the Repository:**
  - `git clone https://github.com/aditya-arch/feature-instagram-stories.git`
  - `cd feature-instagram-stories`
- **Install Dependencies:**
  - Using npm: `npm install`
  - Or using yarn: `yarn install`

---

## Running the Application

- **Development Server:**
  - Run `npm run dev` or `yarn dev`
  - Open [http://localhost:5173](http://localhost:5173) in your browser.
  - **Note:** This app is optimized for mobile devices. If you're running it on a PC, please open your browser's developer tools and switch to a mobile view (e.g., simulate iPhone 14 Pro Max or Samsung S20 Ultra) for the best experience.

---

## Testing

- **Unit & Integration Tests:**
  - Run with `npm test` or `yarn test`
- **End-to-End Tests (Cypress):**
  - **Interactive Mode:**  
    - Run `npx cypress open` to launch the Cypress Test Runner.
  - **Headless Mode:**  
    - Run `npx cypress run`

*Example E2E Test File:* `cypress/e2e/stories.cy.ts` verifies:
  - The story viewer opens when a preview is clicked.
  - Navigation between stories functions correctly.

---

## Design Choices & Optimizations

- **Mobile-First, White UI:**
  - Clean, minimal design with a white background and black text.
  - Designed and tested specifically for modern smartphones like the **iPhone 14 Pro Max** and **Samsung S20 Ultra**.
- **Typography:**
  - Title styled in a cursive font (e.g., Pacifico imported globally).
- **Performance Enhancements:**
  - Lazy-loaded images.
  - Use of `React.memo` for critical components.
  - Smooth transitions using CSS transitions and optimized auto-advance timing.
- **Modular Structure:**
  - Components are separated into dedicated files (StoriesList, StoryViewer, ProgressBar).
  - Styles are managed in component-specific CSS files.

---

## Git Workflow & Submission Process

- **Initial Commit:**
  - Project scaffolding committed to the master/main branch.
- **Feature Branch:**
  - Full assignment developed on a branch (e.g., `instagram-stories-feature`).
- **Pull Request:**
  - A PR was raised from the feature branch to master/main for review.

---

## Deployment

- **Live Demo:**
  - The application will be deployed on [Your Deployment Platform] (e.g., Vercel, Netlify, or Heroku).
  - **Deployment Link:** *To be updated once the app is deployed.*

---

## Contact

- **Email:** adikumar9828@gmail.com
- **GitHub:** [https://github.com/aditya-arch]

---

Thank you for reviewing my submission!
