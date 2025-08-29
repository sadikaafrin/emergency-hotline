1.ans:
The document.getElementById(), document.getElementsByClassName(), document.querySelector(), and document.querySelectorAll() methods are fundamental for selecting and manipulating elements within the Document Object Model (DOM) in JavaScript.
1. document.getElementById()
Purpose: Selects a single element based on its unique id attribute.
Return Value: Returns the specific HTML element object if found, or null if no element with the given ID exists.

2. document.getElementsByClassName()
Purpose: Selects all elements that possess a specific class name.
Return Value: Returns a live HTMLCollection of elements. "Live" means that changes to the DOM (e.g., adding or removing elements with that class) will automatically update the collection.

3. document.querySelector()
Purpose: Selects the first element that matches a specified CSS selector.
Return Value: Returns the first matching HTML element object, or null if no match is found.

4. document.querySelectorAll()
Purpose: Selects all elements that match a specified CSS selector.
Return Value: Returns a static (non-live) NodeList containing all matching elements. "Static" means that the collection will not automatically update if elements matching the selector are added or removed from the DOM after the initial selection.

2.ans:
<div id="div1">
  <p id="p1">This is a paragraph.</p>
  <p id="p2">This is another paragraph.</p>
</div>

<script>
const para = document.createElement("p");
const node = document.createTextNode("This is new.");
para.appendChild(node);

const element = document.getElementById("div1");
element.appendChild(para);
</script>


3.ans:
Event bubbling is a browser mechanism where a DOM event, like a click, starts at the innermost element that was interacted with and then travels up the DOM tree to its parent elements, grandparents, and so on, until it reaches the root of the document. This allows parent elements to listen for and respond to events that occur on their child elements.


4.ans:
Event delegation in JavaScript is a technique where a single event listener is attached to a parent element to manage events triggered by its child elements, rather than adding separate event listeners to each child. This approach leverages the concept of event bubbling, where an event triggered on a child element propagates up to its parent elements. 
Why Event Delegation is Useful:
Improved Performance and Reduced Memory Usage:
Instead of creating numerous individual event listeners for each child element, event delegation requires only one listener on the parent. This significantly reduces memory consumption and improves performance, especially in applications with a large number of interactive elements.
Handling Dynamic Content:
Event delegation is particularly beneficial when dealing with dynamically added or removed elements. Since the event listener is on a stable parent, newly added child elements automatically benefit from the existing event handling without needing new listeners to be explicitly attached.
Simplified Code and Easier Maintenance:
Centralizing event handling on a parent element makes the code cleaner and more manageable. It reduces redundancy and simplifies updates or modifications to event logic, as changes only need to be applied in one place.
Efficient Event Management:
By using the event.target property within the parent's event listener, you can identify which specific child element triggered the event and apply the appropriate logic, allowing for precise control over individual element interactions despite having a single listener.

5.ans:
The preventDefault() and stopPropagation() methods in JavaScript event handling address different aspects of event behavior in the Document Object Model (DOM). 
event.preventDefault():
This method is used to prevent the default action associated with an event. Many HTML elements and events have built-in default behaviors. For example:
Clicking a link (<a>) typically navigates to the specified URL.
Submitting a form (<form>) typically reloads the page or sends data to a server.
Pressing a key in a text input may insert a character.
Calling event.preventDefault() within an event handler prevents these default actions from occurring, allowing for custom handling of the event.
event.stopPropagation():
This method is used to prevent the event from propagating further in the DOM hierarchy. When an event occurs on an element, it typically "bubbles" up to its parent elements (and potentially "captures" down to child elements during the capturing phase). Any event listeners attached to these parent or ancestor elements for the same event type would also be triggered. Calling event.stopPropagation() stops this propagation, meaning the event will not trigger listeners on parent or ancestor elements.
