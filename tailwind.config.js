module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      backgroundImage: {
          'nav': "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%), url('../public/img/bg.jpg')",
          'tatooine': "linear-gradient(180deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.2) 90%), url('../public/img/tatooine.jpg')",
          'darth': "linear-gradient(180deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.2) 90%), url('../public/img/darth-vader.jpg')"
      },
      extend: {
          colors: {
              custGray: "#272b30",
              custBlue: "#051040",
              custYellow: "#FFE81F"
          },
          fontFamily: {
              openSans: "'Open Sans', sans-serif",
              restore: "'restore', sans-serif"
          }
      },
    },
    plugins: [],
  }