module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      backgroundImage: {
        "btn-gradient": "linear-gradient(90deg, #19D3AE -22.5%, #0FCFEC 120.83%)",
      },
    },
  },
  
  // daisy-ui theme config
  daisyui: {
    themes: [
      {
        myTheme: {
          primary: "#0FCFEC",
          secondary: "#19D3AE",
          accent: "#3A4256",
          "light-gray": "#D4D9E3",
          while: "#ffffff",
        },
      },
      "dark",
      "cupcake",
    ],
  },

  plugins: [require("daisyui")],
};
