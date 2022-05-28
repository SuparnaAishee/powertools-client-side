module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#a5f3fc",
          secondary: "#fde047",
          accent: "#37CDBE",
          neutral: "#3D4451",
          "base-100": "#fff",
          info: '#3ABFF8',
          success: '#36D399',
          warning:'#FBBD23',
          error: "#ede9fe",
        },
      },
      "dark",
      "cupcake",
    ],
  },
  plugins: [require("daisyui")],
}
