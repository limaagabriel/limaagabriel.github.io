/** @type {import('prettier').Options} */
module.exports = {
	useTabs: true,
	singleQuote: true,
	semi: false,
	plugins: ['prettier-plugin-tailwindcss'],
	tailwindStylesheet: './src/styles/tailwind.css',
}
