import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from "@svgr/rollup";

export default defineConfig({
    plugins: [react(), svgr()],
    server: {
        host: '0.0.0.0',  // or 'localhost' or a custom IP
        port: 3000,       // change to any port you prefer
    }
})
