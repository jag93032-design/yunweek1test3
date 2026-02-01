# Lotto Number Generator

## Overview

This project is a web-based Lotto Number Generator. It allows users to generate random sets of lottery numbers and view a history of the generated sets. The application is built using modern HTML, CSS, and JavaScript, leveraging Web Components for a modular and maintainable structure.

## Style, Design, and Features

### Style and Design

*   **Layout:** A clean, centered layout that is mobile-responsive.
*   **Color Palette:** A modern color scheme with a vibrant accent color for interactive elements.
*   **Typography:** Clear and readable fonts, with a larger size for the generated numbers.
*   **Effects:**
    *   Subtle noise texture on the background for a premium feel.
    *   Drop shadows on the main container and button to create a sense of depth.
    *   A "glow" effect on the button on hover.
*   **Iconography:** Using SVGs for icons to enhance user understanding.

### Features

*   **Random Number Generation:** Generates 6 unique numbers between 1 and 45.
*   **Number Display:** Displays the generated numbers in a clear and visually appealing way.
*   **History:** Keeps a record of previously generated number sets.
*   **Web Component:** The entire application is encapsulated within a `<lotto-generator>` custom element for modularity.
*   **Dark/White Mode:** A toggle switch to change between light and dark themes.

## Current Plan

### Add Dark/White Mode

1.  **Update `style.css`:**
    *   Define CSS variables for the color palette for both light and dark themes.
    *   Use a `data-theme` attribute on the `body` to switch between the themes.
2.  **Update `main.js`:**
    *   Add a theme toggle button to the `LottoGenerator` component.
    *   Implement the JavaScript logic to toggle the `data-theme` attribute on the `body` element and save the user's preference in `localStorage`.
3.  **Push to GitHub:**
    *   Commit the changes with a descriptive message.
    *   Push the new feature to the `main` branch on GitHub.
