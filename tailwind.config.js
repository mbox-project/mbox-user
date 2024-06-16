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
            deepAsh : '#EFEFEF',
            lightYellow: '#BB800F',
            lightGrayColor:'#9A9A9A',
            featureColor:'#FFF9FF'
           
            
        },
      backgroundImage: {
        'card' : "url('../public/images/cardimg.png')",
        'slide' : "url('../public/images/slide.png')",
      },
      dropShadow: {
        'custom': [
          '0px 2.77px 2.21px rgba(38, 161, 123, 0.07)',
          '0px 6.65px 5.32px rgba(38, 161, 123, 0.05)',
          '0px 12.52px 10.02px rgba(38, 161, 123, 0.04)',
          '0px 22.34px 17.87px rgba(38, 161, 123, 0.03)',
          '0px 41.78px 33.42px rgba(38, 161, 123, 0.03)',
          '0px 100px 80px rgba(38, 161, 123, 0.02)'
        ]
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
