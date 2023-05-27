export default defineNuxtConfig({
		css: ['@/assets/css/styles.css'], modules: ['@nuxt-alt/vuetify', 'nuxt-icons', 'nuxt-icon'], plugins: [{
				src: '~/plugins/vercel.ts', mode: 'client'
		}], vuetify: {
				pluginOptions: {
						styles: true
				}, vuetifyOptions: {
						blueprint: 'md3', theme: {defaultTheme: 'dark'}
				}
		}
})
