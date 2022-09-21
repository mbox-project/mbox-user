module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        colors:{
            brightRed: '#EF5612',
            brightPurple: '#491546',
            lightGray:'#444444',
            grayColor:'#FAFAFA',
            yellowColor:'#FFA721',
            lightPink:'#FFF9FF',
            lightAsh:'#E5E5E5',
            deepGray:'#F7F7F7',

            lightYellow: '#BB800F',
            lightGrayColor:'#9A9A9A'
           
            
        },
      backgroundImage: {
        'card' : "url('../public/images/cardimg.png')",
        'slide' : "url('../public/images/slide.png')",
      },
      borderRadius:{
        'large': '20px'
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      
      },
      
    },
  },
};
