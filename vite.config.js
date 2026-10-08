import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// base: './' يجعل الموقع يعمل على أي استضافة أو داخل مجلد فرعي
export default defineConfig({
  base: './',
  plugins: [react()],
});
