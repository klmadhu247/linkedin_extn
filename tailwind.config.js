/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      width: {
        dialWidth: '870px',
        propmtWidth:'818px'
      },
      height: {
        dialHeight: '192px',
        propmtHeight: '61px',
        dial2Hieght:'452px'
      },
      padding: {
        dialPadding: '26px 0px 0px 0px',
      },
      gap: {
        dialGap: '26px',
        propmtGap:'4px'
      },
      borderRadius: {
        dialBorderRadius: '15px',
        propmtRadious: '12px'
      },
      opacity: {
        dialOpacity: '0px',
      },
      backgroundColor: {
        dialBg: '#F9FAFB',
        replyBg:' #DBEAFE',
        regenerateBg: '#3B82F6'
      },
      boxShadow: {
        wand_Shadow: '0px 4px 6px -1px #0000001A',
        wand_Hover_Shadow: '0px 2px 4px -2px #0000001A',
        dialShadow: '10px 10px 15px 5px rgba(0, 0, 0, 0.1)',
        propmtShadow: '0px 2px 4px 0px #0000000F inset'
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
    }
  }

    
  },
  plugins: [],
}
