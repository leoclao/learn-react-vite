import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			"@/assets": path.resolve(__dirname, "./src/assets"),
			"@/components": path.resolve(__dirname, "./src/components"),
			"@/constants": path.resolve(__dirname, "./src/constants"),
			"@/container": path.resolve(__dirname, "./src/container"),
			"@/features": path.resolve(__dirname, "./src/features"),
			"@/styles": path.resolve(__dirname, "./src/styles"),
			"@/utils": path.resolve(__dirname, "./src/utils"),
		},
	},
});
