import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue({
			babel: {
				plugins: ["@babel/plugin-proposal-optional-chaining"],
			},
		}),
	],
	resolve: {
		alias: {
			"#": path.resolve("./"),
			"#assets": path.resolve("./src/assets"),
			"#components": path.resolve("./src/components"),
		},
	},
});
