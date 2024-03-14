/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{ts,tsx,js,html,jsx,vue}"],
  theme: {
    extend: {
      keyframes:{
        fromLeft:{
          "0%":{transform:"translateX(-200px)"},
          "100%": {transform:"translateX(0)"},
        }
      },
      animation:{
        fromLeft: "fromLeft 0.2s linear",
      }
    },
  },
  plugins: [],
}

