/* eslint-disable no-undef */
/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	env:{
		BACKEND_URL:'https://fw5-zwallet.herokuapp.com',
		FRONTEND_URL: 'http://localhost:3000'
	},
	images:{
		domains:['res.cloudinary.com'],
	}
}

module.exports = nextConfig
