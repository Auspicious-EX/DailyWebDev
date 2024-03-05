![Banner](https://github.com/Auspicious-EX/DailyWebDev/blob/main/Day%2003/images/baneer.gif?raw=true)

# Tutorial **3** Notes

In this tutorial, we'll cover some fundamental concepts of web development to help you understand how web pages work and how to structure them effectively.

## 1. When Does a Web Page Reload and When Does it Not?

Understanding when a web page reloads is crucial for optimizing user experience. Pages typically reload when:
- The user clicks on a link or submits a form.
- JavaScript code explicitly requests a page reload.

Pages usually do not reload when:
- Navigating between different sections of a single-page application (SPA) using JavaScript.
- Dynamically updating content using AJAX requests.

## 2. HTML Structure

HTML (Hypertext Markup Language) provides the structure for web pages. Here's a basic HTML structure:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your Page Title</title>
</head>
<body>
    <!-- Content goes here -->
</body>
</html>
```
- < !DOCTYPE html>: Defines the document type and version of HTML.
- < html lang="en">: The root element of the HTML document with the language attribute set to English.
- < head>: Contains meta-information about the document, such as character encoding, viewport settings, and page title.
- < meta>: Provides metadata about the HTML document.
- < title>: Sets the title of the document.
- < body>: Contains the content of the document visible to users.

## 3. Self-Closing Tag vs. Pair Tag
In HTML, tags can be self-closing or paired:

- Self-closing tags have no content and end with a forward slash, e.g., < br/>, < img/>.
- Paired tags have an opening and closing tag, encapsulating content between them, e.g., < p>< /p>, < div>< /div>.
## 4. Title and Meta Tags
Title and meta tags are essential for SEO and improving the user experience:

- < title>: Defines the title of the web page displayed in the browser's title bar or tab.
- < meta>: Provides metadata such as description, keywords, author, and viewport settings.

## 5. Previewing a Website on Mobile Using IPv4 Address in Live Share
To preview a website on a mobile device using Live Share with an IPv4 address:

- 1. Start a Live Share session in Visual Studio Code.
- 2. Share the server link with your mobile device.
- 3. On the mobile device, open a browser and enter the IPv4 address followed by the port number to access the website.
        - For example: http://192.168.1.2:3000

- This allows you to view and interact with the website as if it were running locally on your mobile device.
