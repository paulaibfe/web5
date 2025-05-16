import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Ignora errores de ESLint al hacer build
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Ignora errores de TypeScript al hacer build
  typescript: {
    ignoreBuildErrors: true,
  },
  // Desactiva la optimización de imágenes para usar Next 15 sin configuración extra
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
