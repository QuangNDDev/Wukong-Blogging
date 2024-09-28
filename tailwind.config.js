/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Poppins", ["sans-serif"]],
      },
      colors: {
        primary: "#2EBAC1",
        grayDark: "#292D32",
        grayLight: "#E7ECF3",
        placeHolderColor: "#84878b",
        borderColor: "#2196f3",
      },
      backgroundImage: {
        "linear-gradient": "linear-gradient(to right bottom, #00A7B4, #A4D96C)",
      },
      width: {
        signup: "300px",
        login: "300px",
      },
    },
  },
  plugins: [],
};
