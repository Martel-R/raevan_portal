/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Essencial para transpilar módulos ES do Three.js e React Three Fiber no Next.js App Router (SSR)
  transpilePackages: ["three", "@react-three/fiber", "@react-three/drei"],
}

export default nextConfig
