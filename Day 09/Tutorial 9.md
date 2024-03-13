![Banner](https://github.com/Auspicious-EX/DailyWebDev/blob/main/Day%2009/images/banner.gif?raw=true)

# Tutorial **9** Notes

In this tutorial, we'll discuss HTML ID and class attributes, their usage, and how to style them using CSS. Additionally, we'll explore how to use IDs for linking within a website.

## What is ID in HTML?

In HTML, the ID attribute is used to uniquely identify an element on a web page. Each ID value must be unique within the entire HTML document.

### Rule:
- The value of the ID attribute must begin with a letter (a-z or A-Z) and can be followed by letters, digits (0-9), hyphens (-), underscores (_), or periods (.).
- ID values are case-sensitive.

## What is Class in HTML?

In HTML, the class attribute is used to specify one or more class names for an element. Class names can be shared among multiple elements, allowing you to apply the same styles or behaviors to multiple elements.

### Rule:
- The class attribute can contain multiple class names separated by spaces.

## How to Access IDs and Classes in CSS?

To style elements based on their IDs or classes in CSS, you can use the ID selector (`#`) or class selector (`.`) followed by the ID or class name.

### Example:
```css
#uniqueID {
    /* CSS styles for elements with ID "uniqueID" */
}

.className {
    /* CSS styles for elements with class "className" */
}
```

## How to Use #ID in Linking for Locating on a Website?
- You can use the ID attribute to create anchor links within a website. By linking to an element's ID, you can navigate users directly to a specific section of a web page.

```html
<a href="#elementID">Link Text</a>
```

- Example:
```html
<a href="#section2">Go to Section 2</a>


<section id="section2">
    <!-- Section content -->
</section>
```
- In this example, clicking the link will scroll the page to the section with the ID "section2".


