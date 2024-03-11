![Banner](https://github.com/Auspicious-EX/DailyWebDev/blob/main/Day%2007/images/banner.gif?raw=true)

# Tutorial **7** Notes

In this tutorial, we'll introduce HTML forms, why they are used, and dive into the `<form>` tag along with its attributes and elements.

## What is a Form and Why Do We Use It?

A form is an essential part of web development used to collect user input. It allows users to interact with a web page by entering data, which can be submitted to a server for processing. Forms are commonly used for various purposes such as user authentication, data submission, and user feedback.

## Form Tag

The `<form>` tag is used to create a form in HTML. It can include various attributes and elements to define the form's behavior and structure.

### Attributes:
- **action**: Specifies the URL where the form data should be submitted (can be `get` or `post`).
- **method**: Specifies the HTTP method used to submit the form data (`get` or `post`).

### Elements and Tags:
- `<input>`: Creates an input field within the form.
- `<label>`: Defines a label for an input field.
- `<button>`: Creates a button for form submission.
- `<select>`: Creates a dropdown list.
- `<textarea>`: Creates a multiline text input field.
- `<fieldset>`: Groups related form elements together.
- `<legend>`: Defines a caption for a `<fieldset>` element.

### Example:
```html
<form action="/submit-form" method="post">
    <label for="username">Username:</label>
    <input type="text" id="username" name="username" required autofocus>
    <br>
    <label for="password">Password:</label>
    <input type="password" id="password" name="password" required>
    <br>
    <button type="submit">Submit</button>
</form>
```

## Attributes:
- **name**: Provides a name for the input field, used to identify the data on the server.
- **id**: Specifies a unique identifier for the input field, used for styling and JavaScript manipulation.
- **value**: Sets the default value for the input field.
- **required**: Specifies that the input field must be filled out before submitting the form.
- **autofocus**: Specifies that the input field should automatically have focus when the page loads.

## Validations and Patterns
- HTML5 introduces built-in form validation attributes and patterns to enforce data constraints and improve user experience.

```html
<input type="email" id="email" name="email" required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$">
```
- In this example, the input field accepts only valid email addresses.

<hr>
<hr>

### Source: https://www.codewithharry.com/tutorial/html-forms/