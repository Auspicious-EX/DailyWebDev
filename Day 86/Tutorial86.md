# Tutorial **86** Notes

## Hosting an Express App on Ubuntu VPS

#### What is VPS in Hosting?
- **VPS (Virtual Private Server)** is a type of hosting where a physical server is divided into multiple virtual servers. Each VPS operates independently, with its own dedicated resources, including CPU, RAM, and storage. It provides more control, flexibility, and performance compared to shared hosting, making it ideal for hosting web applications like Node.js.

#### What is Root?
- **Root** is the administrative user on Linux systems with the highest level of access. The root user has the ability to perform any command and make any changes on the server, including installing software, modifying system configurations, and managing other users.

#### What is SSH Terminal? How Can We Use It?
- **SSH (Secure Shell)** is a protocol used to securely connect to a remote server or machine over a network. The SSH terminal is the command-line interface where you can execute commands on a remote server after establishing an SSH connection. 

**How to Use SSH:**
1. **Access the Terminal**: On Linux/Mac, use the built-in terminal. On Windows, use a tool like PuTTY or Windows Terminal.
2. **Connect to the Server**: Use the command `ssh user@server-ip` (replace `user` with your server's username and `server-ip` with your server's IP address).
3. **Authenticate**: Enter the password or use SSH keys for authentication.
4. **Execute Commands**: Once connected, you can run any command as if you were directly accessing the server.

### How to Host a Node.js App on Ubuntu VPS

#### Step 1: Install Node.js and Build Essentials
1. **Update Package List**: 
   ```bash
   sudo apt update
   ```
2. **Install Node.js**: 
   ```bash
   sudo apt install nodejs
   ```
3. **Install npm (Node Package Manager)**: 
   ```bash
   sudo apt install npm
   ```
4. **Install Build Essentials**: 
   ```bash
   sudo apt install build-essential
   ```

#### Step 2: Create a Simple Node.js App
1. **Create a Directory for Your App**:
   ```bash
   mkdir myapp && cd myapp
   ```
2. **Initialize npm**:
   ```bash
   npm init -y
   ```
3. **Create `index.js`**: 
   ```javascript
   const express = require('express');
   const app = express();
   const port = 3000;

   app.get('/', (req, res) => res.send('Hello, World!'));

   app.listen(port, () => console.log(`App listening at http://localhost:${port}`));
   ```
4. **Install Express**:
   ```bash
   npm install express
   ```

#### Step 3: Install PM2 and Launch Your App
1. **Install PM2**:
   ```bash
   sudo npm install pm2 -g
   ```
2. **Start Your App with PM2**:
   ```bash
   pm2 start index.js
   ```
3. **Save PM2 Process List and Set Up PM2 to Start on Boot**:
   ```bash
   pm2 save
   pm2 startup
   ```

#### Step 4: Install Nginx
1. **Install Nginx**:
   ```bash
   sudo apt install nginx
   ```
2. **Configure Nginx as a Reverse Proxy**:
   - Edit the default Nginx configuration file:
     ```bash
     sudo nano /etc/nginx/sites-available/default
     ```
   - Replace the content with:
     ```nginx
     server {
         listen 80;

         server_name your_domain_or_IP;

         location / {
             proxy_pass http://localhost:3000;
             proxy_http_version 1.1;
             proxy_set_header Upgrade $http_upgrade;
             proxy_set_header Connection 'upgrade';
             proxy_set_header Host $host;
             proxy_cache_bypass $http_upgrade;
         }
     }
     ```
   - **Test Nginx Configuration**:
     ```bash
     sudo nginx -t
     ```
   - **Restart Nginx**:
     ```bash
     sudo systemctl restart nginx
     ```

#### Step 5: Secure Your Server with HTTPS (Optional but Recommended)
1. **Install Certbot for SSL Certificates**:
   ```bash
   sudo apt install certbot python3-certbot-nginx
   ```
2. **Obtain and Install SSL Certificate**:
   ```bash
   sudo certbot --nginx -d your_domain_or_IP
   ```
3. **Automatically Renew SSL**:
   ```bash
   sudo systemctl enable certbot.timer
   ```

### Final Steps and Summary
- **Firewall Configuration**: Ensure that your firewall allows traffic on ports 80 (HTTP) and 443 (HTTPS). You can use `ufw` to manage the firewall.
- **Monitor Your App**: PM2 provides built-in monitoring tools to check the status of your application.

**Summary**: 
Hosting a Node.js app on an Ubuntu VPS involves setting up the server, creating and configuring the application, and ensuring it runs efficiently with tools like PM2 and Nginx. Additional security with HTTPS is recommended to secure your app.
