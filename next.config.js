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
		telegramToken: "6689555748:AAEX_jZUqcPVQOhLGmeXs-CJql7nlGODkKk",
	},
}

module.exports = nextConfig;
