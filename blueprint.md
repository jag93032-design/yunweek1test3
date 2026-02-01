# Lotto Number Generator

## Overview

This project is a web-based Lotto Number Generator. It allows users to generate random sets of lottery numbers and view a history of the generated sets. The application is built using modern HTML, CSS, and JavaScript, leveraging Web Components for a modular and maintainable structure.

## Style, Design, and Features

### Style and Design

*   **Layout:** A clean, centered layout that is mobile-responsive.
*   **Color Palette:** A modern color scheme with a vibrant accent color for interactive elements. Supports both light and dark modes.
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
*   **Partnership Inquiry Form:** A simple and accessible contact form for partnership inquiries, integrated with Formspree.
*   **Disqus Comments:** A comment section powered by Disqus to allow for user discussions.

## Current Plan

### Add Disqus Comment Section

1.  **Update `index.html`:**
    *   Add the `div` element with the id `disqus_thread` below the `lotto-generator` component. This is where the Disqus comments will be loaded.
    *   Add the Disqus universal embed code script to the body of the `index.html` file to load the comment section.
2.  **Push to GitHub:**
    *   Commit the new feature to the local repository.
    *   Push the changes to the `main` branch on GitHub.
