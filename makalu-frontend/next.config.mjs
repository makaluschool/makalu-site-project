/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{remotePatterns: [
        {
          hostname: 'localhost',

        },
        {
          hostname: "zkmzivycmmcvpqhkdoan.supabase.co",
        }
      ]},
};

export default nextConfig;
