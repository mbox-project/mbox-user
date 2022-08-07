module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        colors:{
            brightRed: '#EF5612',
            brightPurple: '#491546'
        },
      backgroundImage: {
        'card' : "url('../public/images/cardimg.png')",
        'slide' : "url('../public/images/slide.png')",
      },
      borderRadius:{
        'large': '20px'
      },
    },
  },
};
