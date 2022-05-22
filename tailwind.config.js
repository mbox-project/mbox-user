module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'] 
      },
        backgroundImage:(theme)  => ( {
          'register-img': "url('/src/assets/images/bg_img.png')",
          'recover-img': "url('/src/assets/images/recoverimg.png')",
        }),
    }
  },
  plugins: []
};
 