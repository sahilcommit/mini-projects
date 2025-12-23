# 02 | Random Color Generator

A lightweight DOM manipulation utility that generates random RGB values and updates the UI instantly.

## 💡 Core Logic
The application relies on a helper function to generate strictly valid RGB integers (0-255):
```javascript
function random() {
    return Math.floor(Math.random() * 255);
}