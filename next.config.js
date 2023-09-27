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
		telegramToken: "5999586261:AAHEJ9ez4EvZB-6jilybWdNGHK87RkNr_00",
	},
}

module.exports = nextConfig;
