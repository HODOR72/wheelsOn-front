/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		formats: ["image/avif", "image/webp"],
	},
	env: {
		externalLinkApi: `${process.env.EXTERNAL_API_LINK}`,
		basicBackendPath: process.env.BASIC_BACDEND_PATH,
		telegramToken: "6447211986:AAEP7Sxt0VsgfDHSWCv6Vz_vxJtHAOxiTns",
	},
}

module.exports = nextConfig;
