# Tutorial **35** Notes

## CSS Grid: Ultimate MasterClass

CSS Grid Layout is a two-dimensional layout system for the web. It allows developers to create complex layouts more easily and consistently across browsers. With Grid, you can design both rows and columns, unlike flexbox, which is mostly one-dimensional.

### Key Concepts of CSS Grid

1. **Grid Container**: The parent element where Grid is applied using `display: grid;` or `display: inline-grid;`.
2. **Grid Items**: The direct children of a grid container.
3. **Grid Lines**: The lines that divide the grid into cells.

### Basic Properties

#### Grid Container Properties

1. **display**
    ```css
    .container {
        display: grid; /* or inline-grid */
    }
    ```

2. **grid-template-columns**
    ```css
    .container {
        grid-template-columns: 100px 100px 100px; /* Creates three columns, each 100px wide */
    }
    ```

3. **grid-template-rows**
    ```css
    .container {
        grid-template-rows: 50px 50px; /* Creates two rows, each 50px high */
    }
    ```

4. **gap (or grid-gap)**
    ```css
    .container {
        gap: 10px; /* Creates a 10px gap between rows and columns */
        /* grid-column-gap: 10px; grid-row-gap: 10px; */
    }
    ```

5. **grid-template-areas**
    ```css
    .container {
        grid-template-areas: 
            "header header header"
            "sidebar content content"
            "footer footer footer";
    }
    ```

6. **justify-items**
    ```css
    .container {
        justify-items: start; /* Aligns grid items along the row axis */
        /* Can be start, end, center, stretch (default) */
    }
    ```

7. **align-items**
    ```css
    .container {
        align-items: start; /* Aligns grid items along the column axis */
        /* Can be start, end, center, stretch (default) */
    }
    ```

8. **justify-content**
    ```css
    .container {
        justify-content: start; /* Aligns the whole grid along the row axis */
        /* Can be start, end, center, stretch (default), space-around, space-between, space-evenly */
    }
    ```

9. **align-content**
    ```css
    .container {
        align-content: start; /* Aligns the whole grid along the column axis */
        /* Can be start, end, center, stretch (default), space-around, space-between, space-evenly */
    }
    ```

#### Grid Item Properties

1. **grid-column-start, grid-column-end**
    ```css
    .item {
        grid-column-start: 1;
        grid-column-end: 3; /* Spans the item from column line 1 to column line 3 */
    }
    ```

2. **grid-row-start, grid-row-end**
    ```css
    .item {
        grid-row-start: 1;
        grid-row-end: 3; /* Spans the item from row line 1 to row line 3 */
    }
    ```

3. **grid-area**
    ```css
    .item {
        grid-area: header; /* Refers to a named grid area defined in grid-template-areas */
    }
    ```

4. **justify-self**
    ```css
    .item {
        justify-self: start; /* Aligns a single grid item along the row axis */
        /* Can be start, end, center, stretch (default) */
    }
    ```

5. **align-self**
    ```css
    .item {
        align-self: start; /* Aligns a single grid item along the column axis */
        /* Can be start, end, center, stretch (default) */
    }
    ```

### Practical Examples

#### Basic Grid Layout

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Grid Example</title>
    <style>
        .container {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr; /* Creates three equal-width columns */
            gap: 10px;
        }
        .item {
            background-color: #3498db;
            padding: 20px;
            color: white;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="item">Item 1</div>
        <div class="item">Item 2</div>
        <div class="item">Item 3</div>
        <div class="item">Item 4</div>
        <div class="item">Item 5</div>
        <div class="item">Item 6</div>
    </div>
</body>
</html>
```

#### Responsive Layout Using Grid

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Responsive Grid</title>
    <style>
        body {
            margin: 0;
            font-family: Arial, sans-serif;
        }
        .container {
            display: grid;
            grid-template-columns: 1fr;
            gap: 10px;
        }
        .item {
            background-color: #3498db;
            padding: 20px;
            color: white;
        }
        @media (min-width: 600px) {
            .container {
                grid-template-columns: 1fr 1fr;
            }
        }
        @media (min-width: 900px) {
            .container {
                grid-template-columns: 1fr 1fr 1fr;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="item">Item 1</div>
        <div class="item">Item 2</div>
        <div class="item">Item 3</div>
        <div class="item">Item 4</div>
        <div class="item">Item 5</div>
        <div class="item">Item 6</div>
    </div>
</body>
</html>
```

### Key Points

- **CSS Grid** is a powerful tool for creating two-dimensional layouts.
- **Grid Container** properties define the structure of the grid.
- **Grid Item** properties control the placement and alignment of individual items.
- CSS Grid makes it easy to create responsive and complex layouts without the need for additional frameworks.

By mastering CSS Grid, you can create flexible, responsive, and sophisticated layouts that adapt seamlessly to different screen sizes and devices.

<hr>

Certainly! Let's explore the remaining CSS Grid concepts demonstrated in the provided code.

## Detailed Explanation

#### 1. **Grid Template Columns and Rows**
   - The `grid-template-columns` and `grid-template-rows` properties define the track sizes of the grid.
   - In the first code block:
     ```css
     .container {
         border: 2px solid yellow;
         display: grid;
         grid-template-columns: [pehla] 120px [dusra] 100px [t];
         grid-template-rows: 100px 100px 100px;
     }
     ```
     - This creates a grid with three rows, each 100px tall, and two columns, the first being 120px and the second 100px.
     - The column lines are named `[pehla]`, `[dusra]`, and `[t]`.

#### 2. **Grid Line Names**
   - Grid lines can be named to help with layout definitions.
   - In the first code block:
     ```css
     .item-4 {
         grid-row: 1/2;
         grid-column: pehla/t;
     }
     ```
     - This places `.item-4` in the first row and spans from the first named line `pehla` to the last named line `t`.

#### 3. **Overlapping Grid Items**
   - You can define grid areas that overlap.
   - In the second code block:
     ```css
     .container {
         border: 2px solid black;
         display: grid;
         grid-template-areas: 
             "nav nav nav"
             "side article article"
             "footer footer footer";
     }
     ```
     - This creates a grid layout with areas named `nav`, `side`, `article`, and `footer`.

#### 4. **Grid Area Assignment**
   - The `grid-area` property assigns items to specific areas defined by `grid-template-areas`.
   - In the second code block:
     ```css
     .item-1 {
         grid-area: nav;
         background-color: aqua;
     }
     ```
     - This places `.item-1` in the `nav` area.

#### 5. **Grid Row and Column Span**
   - You can control how many rows or columns an item spans.
   - In the first code block, the `.item-4` is defined to span across:
     ```css
     .item-4 {
         grid-row: 1/2;
         grid-column: pehla/t;
     }
     ```
     - This means it starts at row line 1 and ends at row line 2, spanning the columns from `pehla` to `t`.

#### 6. **Naming Grid Lines**
   - In the first example, grid lines are named for easier referencing:
     ```css
     grid-template-columns: [pehla] 120px [dusra] 100px [t];
     ```
     - `pehla`, `dusra`, and `t` are names for the column lines which can be used in the grid item properties.

#### 7. **Combining Grid Properties**
   - It's possible to combine different grid properties for precise control.
   - In the second code block:
     ```css
     .item-5 {
         grid-area: nav;
     }
     ```
     - This `.item-5` overlaps with `.item-1` since both are assigned to the `nav` area.

### Key Takeaways

- **Grid Line Names**: Assign names to grid lines to reference them in grid item placements.
- **Grid Template Areas**: Define areas of the grid for easier layout management.
- **Grid Area Assignment**: Assign grid items to specific areas using the `grid-area` property.
- **Row and Column Span**: Control how many rows or columns a grid item should span.
- **Overlapping Grid Items**: Multiple grid items can occupy the same area if required.

These concepts help create complex and flexible layouts efficiently using CSS Grid.