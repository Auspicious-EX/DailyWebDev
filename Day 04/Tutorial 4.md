![Banner](https://github.com/Auspicious-EX/DailyWebDev/blob/main/Day%2004/images/banner.gif?raw=true)

# Tutorial **4** Notes

In this tutorial, we'll continue our exploration of HTML basics by covering essential tags and concepts.

## Heading Tags

Heading tags `<h1>` to `<h6>` are used to define headings of different levels, with `<h1>` being the highest (most important) level and `<h6>` being the lowest. Here's how they are used:

```html
<h1>This is a Heading 1</h1>
<h2>This is a Heading 2</h2>
<h3>This is a Heading 3</h3>
<!-- And so on... -->
```
## Paragraph Tags
- Paragraph tags `<p>` are used to define paragraphs of text. Here's an example:
```html
<p>This is a paragraph of text. It may contain multiple sentences or lines.</p>
```
## Inline CSS
- Inline CSS allows you to apply styling directly to HTML elements using the style attribute. You can specify CSS properties and their values within the attribute. Here's a basic example:
```html
<p style="color: blue; font-size: 16px;">This paragraph has blue text and a font size of 16 pixels.</p>
```
- In this example:

    - color: blue; sets the text color to blue.
    - font-size: 16px; sets the font size to 16 pixels.

### Attributes and Properties
- Property: Refers to the CSS property you want to apply (e.g., color, font-size).
- Value: Specifies the value of the property (e.g., blue, 16px).

## Anchor Tag with Target Attribute (_blank)
- The anchor tag `<a>` is used to create hyperlinks. The target attribute specifies where to open the linked document. - Setting target="_blank" opens the linked document in a new browser tab. Here's an example:

```html
<a href="https://www.example.com" target="_blank">Visit Example</a>
```
- In this example, clicking on the link "Visit Example" will open https://www.example.com in a new browser tab.

- **href**: Specifies the URL of the page the link goes to.
- **target**: Specifies where to open the linked document.
- **_blank**: Opens the linked document in a new tab or window.
- **_self (default)**: Opens the linked document in the same frame as it was clicked.

## Creating a Bookmark Website
You can use heading tags (`<h1>`, `<h2>`, etc.) and anchor tags (`<a>`) to create a simple bookmark website:
```html
<h1>Bookmarks</h1>
<h2>Technology</h2>
<ul>
    <li><a href="https://example.com/tech" target="_blank">Tech News</a></li>
    <li><a href="https://example.com/tutorials" target="_blank">Tech Tutorials</a></li>
</ul>
<h2>Programming</h2>
<ul>
    <li><a href="https://example.com/coding" target="_blank">Coding Challenges</a></li>
    <li><a href="https://example.com/documentation" target="_blank">Programming Documentation</a></li>
</ul>

```