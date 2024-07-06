# Tutorial 15 : Inline, Internal & External CSS


**Definition:**

CSS (Cascading Style Sheets) is used to style and layout web pages. CSS can be applied to HTML documents in three ways: inline, internal, and external.

**1. Inline CSS:**
- Defined directly within an HTML element using the `style` attribute.
- Applies styles to a specific element.
- Example: `<p style="color: blue;">This is a blue paragraph.</p>`

**2. Internal CSS:**
- Defined within a `<style>` tag inside the `<head>` section of an HTML document.
- Applies styles to the entire document or specific parts of it.
- Example:
  ```html
  <head>
    <style>
      p { color: blue; }
    </style>
  </head>
  ```

**3. External CSS:**

- Defined in a separate .css file and linked to the HTML document using a <link> tag.
- llows for the reuse of the same CSS across multiple HTML documents.
- Example:
  ```html
  <head>
  <link rel="stylesheet" type="text/css" href="styles.css">
  </head>
  ```
  ```css
  p { color: blue; }
  ```

## Key Points:

- Inline CSS is useful for quick, unique styles but can clutter HTML.
- Internal CSS centralizes styles in one part of the HTML but affects only that document.
- External CSS keeps styles separate from HTML, promoting cleaner code and easier maintenance.