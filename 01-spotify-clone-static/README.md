# 01 | Spotify Web Player (UI Clone)

A high-fidelity, static replication of the Spotify Web Player interface. This project focuses strictly on **CSS Layout Architecture** and **Responsive Design** principles.

## 🎯 The Challenge
To reverse-engineer a complex, three-pane application layout (Sidebar, Feed, Fixed Player) using modern CSS, ensuring elements scale correctly without breaking the visual hierarchy.

## 🎨 Technical Highlights

* **Complex Flexbox Layouts:**
    * **Main Container:** Uses `display: flex` with `height: 100vh` to lock the viewport.
    * **Sidebar & Content:** Split horizontally, with the main content area set to `overflow: auto` to allow independent scrolling while keeping the sidebar fixed.
* **Fixed Positioning:** The `.music-player` bar is pinned to the bottom (`position: fixed`), sitting above the Z-index of the main content to mimic the persistent player functionality.
* **Component Design:** Created reusable `.album-card` classes that handle image aspect ratios and hover states uniformly.

## 🛠️ Stack
* **HTML5** (Semantic Structure)
* **CSS3** (Flexbox, Positioning, Transitions)
* **FontAwesome** (Iconography)