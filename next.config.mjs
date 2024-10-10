/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'contenthub-static.grammarly.com',  // Previously added domain
      'www.searchenginejournal.com',        // Another previously added domain
      'img.freepik.com',                     // Previously added domain
      'images.pexels.com',                   // Pexels domain
      'verpex.com',                          // Verpex domain
      'media.licdn.com',                     // LinkedIn domain
      'bairesdev.mo.cloudinary.net',        // Cloudinary domain
      'blog.eduonix.com',                   // New domain to add
    ],
  },
};

export default nextConfig; // Use ES Module export
