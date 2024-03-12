![Banner](https://github.com/Auspicious-EX/DailyWebDev/blob/main/Day%2008/images/banner.gif?raw=true)

# Tutorial **8** Notes

In this tutorial, we'll explore inline and block elements in HTML, their characteristics, and examples of each.

## What are Inline Elements?

Inline elements are elements that do not start on a new line and only take up as much width as necessary. They typically appear within a line of text and do not force a line break after the element.

## What are Block Elements?

Block elements are elements that start on a new line and occupy the full width available to them. They create a visual "block" on the page and force a line break after the element.

## Inline vs. Block Elements

Here's a table summarizing some common inline and block elements:

| Inline Elements   | Block Elements    |
|-------------------|-------------------|
| `<span>`          | `<div>`           |
| `<a>`             | `<p>`             |
| `<strong>`        | `<header>`        |
| `<em>`            | `<section>`       |
| `<img>`           | `<footer>`        |
| `<input>`         | `<ul>`            |
| `<button>`        | `<ol>`            |

## Quick Quiz

Without using the `<br>` tag, write a vertically aligned form asking for name, city, and pincode of a user. Everyone must comment which inline and block elements they used in the quiz.

```html
<form>
    <!-- Block Element: Label -->
    <label for="name">Name:</label>
    <!-- Inline Element: Input -->
    <input type="text" id="name">
    <br>
    <!-- Block Element: Label -->
    <label for="city">City:</label>
    <!-- Inline Element: Input -->
    <input type="text" id="city">
    <br>
    <!-- Block Element: Label -->
    <label for="pincode">Pincode:</label>
    <!-- Inline Element: Input -->
    <input type="text" id="pincode">
</form>
```