/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'gratisography.com', // Correct domain without 'https://'
            port: '',
            pathname: '/wp-content/uploads/**', // Add pathname if you want to restrict further
          },
        ],
      },
};

export default nextConfig;
