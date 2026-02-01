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

## Current Plan

### Add Partnership Inquiry Form

1.  **Update `main.js`:**
    *   Add an HTML section for the partnership inquiry form within the `LottoGenerator` component's template.
    *   The form will be configured to submit to the provided Formspree URL: `https://formspree.io/f/mbdkjnzw`.
    *   The form will include fields for a name, email address, and a message.
    *   Add CSS styles for the form within the component's `<style>` block to ensure it is visually consistent with the rest of the application and responsive to the light/dark themes.
2.  **Push to GitHub:**
    *   Commit the new feature to the local repository.
    *   Push the changes to the `main` branch on GitHub.
