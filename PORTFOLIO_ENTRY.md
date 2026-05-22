# Globe Express — Immersive Travel Showcase

## Project Overview
Globe Express is a cinematic, automated travel destination showcase built to demonstrate high-performance web animation and DOM manipulation techniques. Moving beyond standard carousels, this project orchestrates complex layout shifts where elements fluidly transition between "card" and "hero" states, creating a seamless narrative experience.

## Technical Architecture

### Core Stack
- **Framework-Agnostic JavaScript (ES6+)**: Built without heavy UI libraries to demonstrate raw DOM manipulation and state management mastery.
- **GSAP (GreenSock Animation Platform)**: Utilized for high-performance, GPU-accelerated motion through timelines (`gsap.timeline`) and tweening.
- **Vite & SCSS**: Modern tooling for optimized asset bundling and maintainable styling architecture.

### Key Technical Implementations
1. **State-Driven Animation Loop**:  
   The core logic relies on a circular queue array (`order`) that manages the z-index and positioning of slide elements. By shifting the array (`order.push(order.shift())`), the application dynamically recalculates the "next" and "previous" states without cloning DOM nodes or reflowing layout unnecessarily.

2. **Complex Timeline Orchestration**:  
   All transitions are managed via `gsap.timeline()` combined with promises (`async/await next()`), allowing for precise synchronization of:
   - **FLIP-like Layout Transitions**: Cards expand from a grid position to fill the viewport using calculated transforms (`x`, `y`, `width`, `height`), creating a custom First Last Invert Play effect for maximum control.
   - **Staggered Text Reveals**: Title and description elements animate in with orchestrated delays (0.1s - 0.35s) to guide user attention naturally.
   - **Canvas-style Logic in DOM**: The logic calculates positions based on `window.innerWidth` and `innerHeight`, effectively treating the DOM as a canvas for absolute positioning.

3. **Performance Optimization**:
   - **Will-Change Strategy**: Heavy use of `transform` and `opacity` properties ensures animations run on the compositor thread, avoiding expensive layout thrashing.
   - **Asset Preloading**: A custom `Promise.all` implementation ensures all high-resolution imagery is fully loaded before the animation loop begins, preventing layout shifts or "pop-in".

## Artistic Direction & Motion Design

### Design Philosophy
The visual language centers on **"Fluid Continuity."** Unlike traditional sliders where content abruptly disappears, Globe Express treats every slide as a persistent object. The "outgoing" image doesn't just fade out; it physically retreats, scales down, and rejoins the queue, reinforcing the spatial relationship between the active view and the upcoming content.

### Visual Features
- **Cinematic Pacing**: The animation timing uses `sine.inOut` easing to mimic the physics of heavy, premium objects, avoiding the bouncy or elastic feel common in web UI for a more sophisticated, editorial atmosphere.
- **Editorial Typography**: Large, bold typography overlays the imagery, with split-text animations (Title 1 / Title 2) creating a magazine-style reading experience that feels dynamic and alive.
- **Immersive Depth**: By manipulating `zIndex` and `scale` simultaneously, the interface creates a convincing 3D perception of depth, where users feel they are diving *into* a destination rather than just scrolling past it.
