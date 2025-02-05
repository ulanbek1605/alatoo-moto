import type { NextConfig } from "next";

const nextConfig: NextConfig = { 
	reactStrictMode: true,
	i18n: {
	  locales: ['en', 'ru'],
	  defaultLocale: 'en',
	  localeDetection: false,
	}
};

export default nextConfig;


