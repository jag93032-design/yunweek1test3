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

## Current Plan

1.  **Update `index.html`:**
    *   Change the title to "Lotto Number Generator".
    *   Replace the body content with the `<lotto-generator>` custom element.
2.  **Update `style.css`:**
    *   Add global styles for the body, including the background texture.
    *   The component's internal styles will be defined within the web component.
3.  **Update `main.js`:**
    *   Create the `LottoGenerator` class as a subclass of `HTMLElement`.
    *   Implement the Shadow DOM for encapsulation.
    *   Define the HTML template for the component.
    *   Implement the logic for generating and displaying the lotto numbers.
    *   Implement the history feature.
    *   Define the custom element `lotto-generator`.

