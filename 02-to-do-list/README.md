# 03 | Interactive To-Do List

A task management tool that demonstrates advanced **DOM Manipulation** and **Event Delegation**. Unlike simple lists, this application handles dynamically created elements efficiently.

## 🚀 Key Technical Implementation

### Event Delegation (Performance Optimization)
Instead of attaching an `addEventListener` to every single "Delete" button (which causes memory leaks and performance issues as the list grows), I attached a **single listener** to the parent `<ul>`.

```javascript
ul.addEventListener("click", function(event) {
    if (event.target.nodeName == "BUTTON") {
        // Only trigger if the actual button was clicked
        let listItem = event.target.parentElement;
        listItem.remove();
    }
});