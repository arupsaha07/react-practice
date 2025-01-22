## Installation guide
#### All react projects are done by [Vite](https://vitejs.dev/) and [Tailwind](https://tailwindcss.com/docs/guides/create-react-app)

``Vite:`` npm create vite@latest

``Tailwind:`` 
1. npm install -D tailwindcss 
2. npx tailwindcss init, 
3. replace the section in *tailwind.config.js*	

    content: [ "./src/**/*.{js,jsx,ts,tsx}" ]

4. Add the @tailwind directives for each of Tailwind’s layers to your ./src/index.css file.
@tailwind base;
@tailwind components;
@tailwind utilities;

### Run Project
npm run dev
