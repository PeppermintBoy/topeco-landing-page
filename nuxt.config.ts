// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	target: 'static', // default is 'server'
	css: ['~/node_modules/bootstrap/dist/css/bootstrap.min.css'],
	plugins: [
		{
			src: '~/node_modules/bootstrap/dist/js/bootstrap.bundle.min.js',
			mode: 'client',
		},
	],
});
