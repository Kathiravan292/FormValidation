import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Count from './assets/componant/Count'
// import Styling from './assets/componant/styling'
import Userdata from './assets/componant/Userdata'
import EmotionApp from './assets/componant/EmotionApp'
import Emoje from './assets/componant/Emoje'
import Contact from './assets/componant/Contact'


function App() {

  return (
   <div style={{display:'flex'}}>
    {/* <Userdata></Userdata> */}
    {/* <Count></Count> */}
    {/* <EmotionApp content="happy" emoji="😂"></EmotionApp>
    <EmotionApp content="sad" emoji="😒"></EmotionApp>
    <EmotionApp content="angry" emoji="😡"></EmotionApp> */}
    {/* <Emoje></Emoje> */}
    <Contact></Contact>
  

    
    

   </div>
  )
}

export default App
