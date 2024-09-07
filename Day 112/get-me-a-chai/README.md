[![MasterHead](https://github.com/Auspicious-EX/DailyWebDev/blob/main/Day%20112/get-me-a-chai/IMG/banner.gif?raw=true)](https://github.com/Auspicious-EX/DailyWebDev)

# Tutorial 112: 
make a project of `get me a chai`
## Get Me a Chai ☕

Get Me a Chai is a web platform designed for developers who need funds to complete their projects. Fans and supporters can contribute financially to help these developers bring their ideas to life. The website is built using **Next.js** and **SCSS**, with **Auth.js** for authentication and **Razorpay** integration for secure payment processing.

### Key Features

- **Project Funding**: Developers can create a profile, list their projects, and provide details such as project name, description, and a link to learn more. Supporters can then contribute funds directly to their project.
- **Authentication**: Built-in user authentication using **Auth.js**, allowing developers to manage their project listings securely.
- **Payment Integration**: Supports payments through **Razorpay**, requiring developers to set up a Razorpay account to receive contributions. Developers must generate a Razorpay client ID and secret to start receiving funds.
- **Refund Policy**: Developers are responsible for managing refunds based on their policies.

### Tech Stack

- **Frontend**: [Next.js](https://nextjs.org/) for server-side rendering and dynamic web pages.
- **Styling**: [SCSS](https://sass-lang.com/) for scalable and maintainable styles.
- **Authentication**: [Auth.js](https://authjs.dev/) for secure user authentication.
- **Payments**: [Razorpay](https://razorpay.com/) integration for seamless payments.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Auspicious-EX/GetMeAChai.git
   ```

2. Install dependencies:
   ```bash
   cd GetMeAChai
   npm install
   ```

3. Set up environment variables for **Auth.js** and **Razorpay**:
   - Create a `.env.local` file and include:
     ```bash
     NEXTAUTH_URL=http://localhost:3000
     RAZORPAY_KEY=your_razorpay_key
     RAZORPAY_SECRET=your_razorpay_secret
     ```

4. Run the development server:
   ```bash
   npm run dev
   ```

   The app will be available at [http://localhost:3000](http://localhost:3000).

### Usage

- **For Developers**:
  - Create a Razorpay account and generate a client ID and secret.
  - Log in to the dashboard and submit project details, including the project name, description, and link.
  - Receive contributions from fans and supporters directly through the platform.

- **For Supporters**:
  - Browse through projects created by developers.
  - Choose a project to support and contribute funds via the Razorpay payment gateway.


## Screenshots

Here are some screenshots of the Lockex app showcasing its user interface and features:


   ![Homepage](https://github.com/Auspicious-EX/DailyWebDev/blob/main/Day%20112/get-me-a-chai/IMG/2.png?raw=true)

   ![Credential Management](https://github.com/Auspicious-EX/DailyWebDev/blob/main/Day%20112/get-me-a-chai/IMG/1.png?raw=true)

## Technologies Used

- **Next.js**: Fast, server-side rendering for modern web applications.
- **SCSS**: Enhanced stylesheets for modular and organized styling.
- **Auth.js**: Simplified and secure user authentication.
- **Razorpay**: Reliable and fast payment integration.

## Contact

For any questions or feedback, feel free to reach out via:
Hello i am Shubham Prajapati Aka Auspicious and this is my ...

- **LinkedIn**: [My LinkedIn Profile->](https://www.linkedin.com/in/shubham-prajapati-b1051a246/)
- **GitHub**: [My GitHub Profile->](https://github.com/Auspicious-EX)
- **Portfolio**: [My Portfolio Website->](https://auspicious.me)

