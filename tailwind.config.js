/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Montserrat", ["sans-serif"]],
      },
      colors: {
        primary: "#2EBAC1",
        grayDark: "#292D32",
        grayLight: "#E7ECF3",
        placeHolderColor: "#84878b",
        borderColor: "#2196f3",
        gray23: "#232323",
      },
      backgroundImage: {
        "linear-gradient": "linear-gradient(to right bottom, #00A7B4, #A4D96C)",
      },
      backgroundColor: {
        bgWhite: "#FFF",
      },
      width: {
        signup: "300px",
        login: "300px",
      },
    },
  },
  plugins: [],
};
