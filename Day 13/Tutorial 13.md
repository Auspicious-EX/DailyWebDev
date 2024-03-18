![Banner](https://github.com/Auspicious-EX/DailyWebDev/blob/main/Day%2013/images/banner.gif?raw=true)

# Tutorial **13** Notes

In this tutorial, we'll explore HTML entities and various tags such as `<pre>`, `<copyright>`, `<q>`, and `<code>`.

## HTML Entities

HTML entities are special codes used to display characters that have special meanings in HTML. They are represented by an ampersand (`&`) followed by a code and a semicolon (`;`). Here are some common HTML entities:

| Entity | Character | Description             |
|--------|-----------|-------------------------|
| `&lt;` | <         | Less than               |
| `&gt;` | >         | Greater than            |
| `&amp;`| &         | Ampersand               |
| `&quot;`| "        | Double quotation mark   |
| `&copy;`| ©        | Copyright symbol        |
| `&reg;` | ®        | Registered trademark    |
| `&trade;`| ™      | Trademark symbol        |
| `&nbsp;`| (space)        | Non-breaking space      |

## HTML Tags

### `<pre>` Tag

The `<pre>` tag defines preformatted text, preserving both spaces and line breaks. It's commonly used for displaying code snippets or preserving whitespace.

```html
<pre>
    This   text
    has
    spaces
</pre>
```

## `<copyright>` Tag
The `<copyright>` tag is not a standard HTML tag. To represent copyright symbol, you can use HTML entity &copy;.
```html
&copy; 2024 MyWebsite
```

## `<q>` Tag
The `<q>` tag defines a short inline quotation. It's used to indicate that the enclosed text is a short quotation.

```html
<q>This is a short quotation.</q>
```

`<code>` Tag
The  `<code>` tag is used to define a piece of computer code. It's typically rendered in a monospaced font.
```html
<code>int main() { return 0; }</code>
```

### Source
This tutorial is adapted from https://www.codewithharry.com/tutorial/html-code-tags/