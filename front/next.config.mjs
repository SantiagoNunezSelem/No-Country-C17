/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Replace the deprecated "domains" configuration with "remotePatterns"
    // Define patterns for remote image domains
    // The patterns should match the domains you want to allow for image optimization
    // You can use regular expressions to define patterns
    remotePatterns: [
      // Example patterns for the domains you listed
      { hostname: 'img.freepik.com' },
      { hostname: 'tienda.fotografiamardelplata.com.ar' },
      { hostname: 'abconsultora.com' },
      { hostname: 'via.placeholder.com' },
      { hostname: 'fotomanias.com.ar' },
      { hostname: 'static.mygon.com' },
      { hostname: 'upload.wikimedia.org' },
      { hostname: 'somosinfinita.com' },
      { hostname: 'www.dzoom.org.es' },
    ],
  },
};

export default nextConfig;