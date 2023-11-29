import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/MRACs",
  // server: {
  //   port: 3030
  // },
  // preview: {
  //   port: 8080
  // },
})
