import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
<<<<<<< HEAD
 
=======

>>>>>>> ae5281432a1d30dbce135d76e425b1ebb6e12fd8
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
<<<<<<< HEAD
})
=======
})
>>>>>>> ae5281432a1d30dbce135d76e425b1ebb6e12fd8
