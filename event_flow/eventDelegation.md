# JavaScript Event Delegation

| Feature         | **Description**                                                                                                                                                                                                                                 |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Definition**  | A technique that allows a single event listener to manage events for multiple child elements.                                                                                                                                                   |
| **Quick Demo**  | Attach an event listener to a parent element to handle events from its child elements. <br> `javascript <br> parent.addEventListener('click', (e) => { <br> if (e.target.matches('.child')) { <br> // Handle child click <br> } <br> }); <br> ` |
| **Benefits**    | 1. Improves memory space <br> 2. Mitigates performance bottlenecks <br> 3. Simplifies DOM manipulation <br> 4. Efficient for dynamically added elements                                                                                         |
| **Limitations** | 1. Not all events bubble (e.g., `blur`, `focus`) <br> 2. If `event.stopPropagation()` is used in a child, events won't bubble up                                                                                                                |

## Behavior Patterns Achievable with Event Delegation

- Efficiently manage events for dynamically created elements.
- Reduce the number of event listeners in the DOM.
- Simplify event management by handling events at a higher level.
