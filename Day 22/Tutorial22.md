# Tutorial **22** Notes
## CSS Display Property
The CSS `display` property specifies how an element should be displayed on a web page. It affects the layout and flow of elements.

### Key Points:
1. **Block**: The element is rendered as a block-level element.
   - Example: `display: block;`
   - Usage: 
     ```html
     <div style="display: block;">This is a block-level element</div>
     ```

2. **Inline**: The element is rendered as an inline-level element.
   - Example: `display: inline;`
   - Usage: 
     ```html
     <span style="display: inline;">This is an inline element</span>
     ```

3. **Inline-Block**: The element is rendered as an inline-level element but can have a width and height.
   - Example: `display: inline-block;`
   - Usage: 
     ```html
     <div style="display: inline-block; width: 100px; height: 50px; background-color: lightblue;">This is an inline-block element</div>
     ```

4. **None**: The element is not displayed and does not take up any space.
   - Example: `display: none;`
   - Usage: 
     ```html
     <div style="display: none;">This element is hidden</div>
     ```

5. **Flex**: The element becomes a flex container for flexible box layout.
   - Example: `display: flex;`
   - Usage: 
     ```html
     <div style="display: flex;">
         <div style="background-color: lightcoral;">Flex Item 1</div>
         <div style="background-color: lightgreen;">Flex Item 2</div>
     </div>
     ```

6. **Grid**: The element becomes a grid container for grid layout.
   - Example: `display: grid;`
   - Usage: 
     ```html
     <div style="display: grid; grid-template-columns: 1fr 1fr;">
         <div style="background-color: lightcoral;">Grid Item 1</div>
         <div style="background-color: lightgreen;">Grid Item 2</div>
     </div>
     ```

7. **Inline-Flex**: Similar to `flex` but behaves like an inline element.
   - Example: `display: inline-flex;`
   - Usage: 
     ```html
     <div style="display: inline-flex;">
         <div style="background-color: lightcoral;">Inline-Flex Item 1</div>
         <div style="background-color: lightgreen;">Inline-Flex Item 2</div>
     </div>
     ```

8. **Table**: The element behaves like a `<table>`.
   - Example: `display: table;`
   - Usage: 
     ```html
     <div style="display: table;">
         <div style="display: table-row;">
             <div style="display: table-cell; background-color: lightcoral;">Table Cell 1</div>
             <div style="display: table-cell; background-color: lightgreen;">Table Cell 2</div>
         </div>
     </div>
     ```

9. **List-Item**: The element behaves like a list item (`<li>`).
   - Example: `display: list-item;`
   - Usage: 
     ```html
     <ul>
         <li style="display: list-item;">List Item 1</li>
         <li style="display: list-item;">List Item 2</li>
     </ul>
     ```

### Also a important link for this topic which is must visitable for you
[here](https://developer.mozilla.org/en-US/docs/Web/CSS/display)(CSS Display Property | Mozilla)