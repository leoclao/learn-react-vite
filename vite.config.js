/** @type {import('vite').UserConfig} */
import path from "node:path";
import { fileURLToPath } from 'node:url'; 
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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
			"@/hooks": path.resolve(__dirname, "./src/hooks"),
			"@/styles": path.resolve(__dirname, "./src/styles"),
			"@/utils": path.resolve(__dirname, "./src/utils"),
			"@/types": path.resolve(__dirname, "./src/types"),
		},
	},
});
