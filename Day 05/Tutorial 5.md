![Banner](https://github.com/Auspicious-EX/DailyWebDev/blob/main/Day%2005/images/banner.gif?raw=true)

# Tutorial **5** Notes

In this tutorial, we'll cover the image tag (`<img>`), table tags (`<table>`, `<tr>`, `<td>`), and lists (`<ul>`, `<ol>`, `<li>`).

## Image Tag: src, alt, height, width

The image tag (`<img>`) is used to embed images in HTML documents. Here's an overview of its attributes:

- **src**: Specifies the URL of the image.
- **alt**: Provides alternative text for the image (important for accessibility and SEO).
- **height**: Sets the height of the image in pixels.
- **width**: Sets the width of the image in pixels.

#### Example
```html
<img src="example.jpg" alt="Example Image" height="200" width="300">
```


Here's a Markdown file for Tutorial 5 covering the specified topics:

markdown
Copy code

## Table Tags: colspan, rowspan, headers, footers, tbody, border
- HTML tables (`<table>`) are used to display data in rows and columns. Here are some important attributes and tags associated with tables:

- colspan: Specifies the number of columns a cell should span.
- rowspan: Specifies the number of rows a cell should span.
- headers: Associates data cells with header cells in complex tables.
footers: Defines a footer for a table or group of columns.
- tbody: Groups table rows into logical sections (e.g., body, head, footer).
- border: Specifies the width of the table border (deprecated in HTML5).
Example
```html
<table border="1">
    <tr>
        <th colspan="2">Month</th>
        <th rowspan="2">Savings</th>
    </tr>
    <tr>
        <td>January</td>
        <td>$100</td>
    </tr>
    <tr>
        <td>February</td>
        <td>$80</td>
        <td rowspan="2">$160</td>
    </tr>
    <tr>
        <td>March</td>
        <td>$60</td>
    </tr>
</table>
```


## Lists: ul, ol, li, type
- Lists in HTML can be unordered (`<ul>`) or ordered (`<ol>`). Each list item is represented by the `<li>` tag. Here's how to use lists:

- ul: Creates an unordered list (bulleted).
- ol: Creates an ordered list (numbered).
- li: Represents a list item.
- type: Specifies the type of marker for an unordered list (disc, circle, square) or the type of numbering for an ordered list (1, A, a, I, i).
Example
```html
<ul type="circle">
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
</ul>

<ol type="A">
    <li>Item A</li>
    <li>Item B</li>
    <li>Item C</li>
</ol>
```