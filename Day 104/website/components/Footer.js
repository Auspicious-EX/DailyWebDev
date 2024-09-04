import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center md:text-left">
        <div className="md:flex justify-between items-center">
          {/* Left Section */}
          <div className="mb-4 md:mb-0">
            <h5 className="text-lg font-bold mb-2">YourCompany</h5>
            <p className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} YourCompany. All rights reserved.
            </p>
          </div>

          {/* Middle Section */}
          <div className="mb-4 md:mb-0">
            <ul className="flex justify-center space-x-6">
              <li><a href="#home" className="text-sm hover:text-gray-400">Home</a></li>
              <li><a href="#about" className="text-sm hover:text-gray-400">About</a></li>
              <li><a href="#services" className="text-sm hover:text-gray-400">Services</a></li>
              <li><a href="#contact" className="text-sm hover:text-gray-400">Contact</a></li>
            </ul>
          </div>

          {/* Right Section */}
          <div className="flex justify-center md:justify-end space-x-6">
            <a href="https://facebook.com" className="hover:text-gray-400">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 12C22 6.48 17.52 2 12 2S2 6.48 2 12c0 5.02 3.66 9.15 8.44 9.88v-7H8.9v-2.88h1.54V9.79c0-1.52.9-2.38 2.29-2.38.66 0 1.35.12 1.35.12v1.49h-.76c-.75 0-.98.47-.98.95v1.1h1.72l-.27 2.88h-1.45v7c4.78-.73 8.44-4.86 8.44-9.88z"/>
              </svg>
            </a>
            <a href="https://twitter.com" className="hover:text-gray-400">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.46 6.11c-.77.34-1.61.57-2.49.67a4.41 4.41 0 001.94-2.43c-.83.5-1.75.85-2.73 1.05A4.4 4.4 0 0015.6 4.5c-2.43 0-4.4 1.97-4.4 4.4 0 .34.03.67.1.99-3.65-.18-6.9-1.93-9.07-4.59-.38.66-.6 1.43-.6 2.25 0 1.55.79 2.91 2 3.71a4.37 4.37 0 01-2-.55v.05c0 2.16 1.54 3.96 3.57 4.36-.37.1-.76.15-1.16.15-.28 0-.56-.03-.83-.08.56 1.74 2.18 3.01 4.1 3.04a8.86 8.86 0 01-5.48 1.89c-.36 0-.71-.02-1.06-.07A12.48 12.48 0 007.29 20c8.14 0 12.59-6.74 12.59-12.59l-.01-.57a8.97 8.97 0 002.09-2.29"/>
              </svg>
            </a>
            <a href="https://instagram.com" className="hover:text-gray-400">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2.16c3.2 0 3.58 0 4.85.07 1.24.07 2.03.26 2.51.43.61.24 1.04.54 1.5 1s.76.89 1 1.5c.17.48.36 1.27.43 2.51.07 1.27.07 1.65.07 4.85s0 3.58-.07 4.85c-.07 1.24-.26 2.03-.43 2.51-.24.61-.54 1.04-1 1.5s-.89.76-1.5 1c-.48.17-1.27.36-2.51.43-1.27.07-1.65.07-4.85.07s-3.58 0-4.85-.07c-1.24-.07-2.03-.26-2.51-.43-.61-.24-1.04-.54-1.5-1s-.76-.89-1-1.5c-.17-.48-.36-1.27-.43-2.51-.07-1.27-.07-1.65-.07-4.85s0-3.58.07-4.85c.07-1.24.26-2.03.43-2.51.24-.61.54-1.04 1-1.5s.89-.76 1.5-1c.48-.17 1.27-.36 2.51-.43 1.27-.07 1.65-.07 4.85-.07m0-2.16c-3.29 0-3.7 0-5 .08-1.33.07-2.25.28-3.04.6-.89.34-1.64.8-2.38 1.54-.74.74-1.2 1.49-1.54 2.38-.32.79-.53 1.71-.6 3.04-.07 1.3-.08 1.71-.08 5s0 3.7.08 5c.07 1.33.28 2.25.6 3.04.34.89.8 1.64 1.54 2.38.74.74 1.49 1.2 2.38 1.54.79.32 1.71.53 3.04.6 1.3.07 1.71.08 5 .08s3.7 0 5-.08c1.33-.07 2.25-.28 3.04-.6.89-.34 1.64-.8 2.38-1.54.74-.74 1.2-1.49 1.54-2.38.32-.79.53-1.71.6-3.04.07-1.3.08-1.71.08-5s0-3.7-.08-5c-.07-1.33-.28-2.25-.6-3.04-.34-.89-.8-1.64-1.54-2.38-.74-.74-1.49-1.2-2.38-1.54-.79-.32-1.71-.53-3.04-.6-1.3-.07-1.71-.08-5-.08zM12 5.84a6.16 6.16 0 100 12.32 6.16 6.16 0 000-12.32zm0 10.16a4 4 0 110-8 4 4 0 010 8zm6.4-10.72a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
