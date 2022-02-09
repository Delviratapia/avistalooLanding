module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'primary-color': '#335963',
        'background-color-bg': '#EEE',
      },
      screens: {
        navxs: { min: "0px", max: "336px" },

        navsm: { min: "337px", max: "767px" },

        navmd: { min: "768px", max: "1102px" },

        navlg: { min: "1103px", max: "5000px" },
      },
      boxShadow: {
        '4xl': '0 0 20px rgba(51, 89, 99, 0.5)',
      },
    },
  },
  plugins: [],
};
