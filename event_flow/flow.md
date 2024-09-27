# JavaScript Event Propagation: Bubbling and Capturing

This section explains the differences between **Event Bubbling** and **Event Capturing** in JavaScript.

| Feature                   | **Bubbling**                                                                           | **Capturing (Trickling)**                                           |
| ------------------------- | -------------------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| **Definition**            | Events propagate from the target element up to the root.                               | Events travel from the root of the DOM down to the target.          |
| **Event Flow Direction**  | Bottom to top (target to root).                                                        | Top to bottom (root to target).                                     |
| **Default Behavior**      | This is the default behavior for event handling.                                       | Must be explicitly defined by passing `true` in `addEventListener`. |
| **Event Listener Syntax** | `HTMLelement.addEventListener('click', handler,false(default can be an empty field))`; | `HTMLelement.addEventListener('click', handler, true);`             |
| **Stopping Propagation**  | Use `event.stopPropagation()` to stop further propagation.                             | Use `event.stopPropagation()` to stop further propagation.          |
| **Immediate Stop**        | Use `event.stopImmediatePropagation()` to prevent other listeners.                     | Use `event.stopImmediatePropagation()` to prevent other listeners.  |

## Additional Notes

- **Event Bubbling**: The event starts from the target element and moves up through its parent elements, allowing all parent listeners to respond to the event. This is useful for event delegation.
- **Event Capturing**: The event starts from the root element and travels down to the target. This allows for handling events before they reach the target.
- **General if mixed flow(true,false written)**: trickling --->> then bubbling ----->>
- **Note** : the flow stops using the `stopPropagation` but event happens for that particular node... means even if we attached it above console.log("Parent clicked"); events stops to propagate after parent but console.log will print "parent clicked"

# QUICK: Bubbling vs. Capturing

| Feature                  | **Bubbling**                       | **Capturing**                         |
| ------------------------ | ---------------------------------- | ------------------------------------- |
| **Direction**            | Target to root (bottom to top)     | Root to target (top to bottom)        |
| **Default Behavior**     | Default for event handling         | Requires `true` in `addEventListener` |
| **Stopping Propagation** | `event.stopPropagation()`          | `event.stopPropagation()`             |
| **Immediate Stop**       | `event.stopImmediatePropagation()` | `event.stopImmediatePropagation()`    |

## Key Points

- **Bubbling**: Allows parent elements to respond to events after the target.
- **Capturing**: Handles events before they reach the target.
- **Best Practice**: Use bubbling for simplicity; use capturing when order matters.
