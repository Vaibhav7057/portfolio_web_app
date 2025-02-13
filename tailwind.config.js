/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        weaver1: {
          "0%": { transform: "rotate(12deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
        weaver2: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(12deg)" },
        },

        propel: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },

        fade: {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
      },

      animation: {
        wiggle: "wiggle 1s ease-in-out infinite",
        fade: "fade 1s ease-in-out 0.5",
        propel: "propel 1s ease-in-out 1",

        spinl: "weaver1 1s ease-in-out 1",
        spinr: "weaver2 1s ease-in-out 1",
      },
      colors: {
        favtext: "#22092C",
        maintext: "#FF6C22",
        dor: "#FF9209",
        bgcolor: "#EDF2F8",
        darkbg1:"#1D1616",
        darkbg2:"#17153B",
        darkt1:"#EEEEEE",
        darkt2:"#E2DFD0",
        darkt3:"#E8BCB9"
      },
      fontFamily: {
        rancho: ["Rancho", "cursive"],
      },
    },
  },
  plugins: [],
  darkMode:'class'
};
