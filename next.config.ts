import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	reactStrictMode: true,
	i18n: {
		locales: ['default', 'en'],
		defaultLocale: 'default',
		localeDetection: false,
	},
	trailingSlash: true,
};

export default nextConfig;


