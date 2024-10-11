import React, { useState } from "react";

import Vector from '../assets/Vector.png'
import down_arrow from '../assets/down_arrow.png'
import refresh from '../assets/refresh.png'
import wand from '../assets/wand.png'

function Extension() {

    const [wandFlag, setWandFlag] = useState(false);
    const [inputText, setInputText] = useState('');
    const [showChat, setShowChat] = useState(false);
    const [loading, setLoading] = useState(false); 
    const [tempInput,setTempInput] = useState('')

    const handleWand = () => {
        setWandFlag(!wandFlag);
        console.log("The Wand is Clicked");
        console.log(wandFlag)
    }

    const handleInput = (e) => {
        setTempInput(e.target.value);
    }

    const handleGenerate = () => {
        setShowChat(true);
        setLoading(true); 
        setInputText(tempInput)
        setWandFlag(!wandFlag)

        
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }

    return (
        <div>
            <div>
                {wandFlag && <div className="dialog_Box">
                    <input 
                        type="text" 
                        placeholder="Your Prompt"  
                        onChange={handleInput} 
                        className="prompt_Input"
                    />
                    <div className="flex justify-end mr-14 mt-4 ">
                        <button 
                            onClick={handleGenerate} 
                            className="flex items-center  bg-blue-500 text-white px-2 py-1 rounded-md"
                        >
                          <img src={Vector} alt="VectorImg" className="
 w-[24.03px] h-[24px] gap-0 "/>  Generate
                           {/* <CiPaperplane className="
 w-[24.03px] h-[24px] gap-0 "/>  */}
                        </button>
                    </div>
                </div> }

                {showChat && <div className="dial_2">
                    <div className="flex justify-end mr-4">
                        <p className="input_Prompt">{inputText}</p>
                    </div>

                    <div className="reply_msg">
                        
                        {loading ? (
                            <p className="text-6xl text-gray-500">...</p>
                        ) : (
                            <p>Thank you for the opportunity! If you have any more questions or if there's anything else I can help you with, feel free to ask.</p>
                        )}
                    </div>
                    
                    <input 
                        type="text" 
                        placeholder="Your Prompt"  
                        onChange={handleInput} 
                        className="prompt_Input"
                    />

                    <div className="button_Family "> 
                        <button className="insert_Button">
                          <img src={down_arrow} className="arrow"/>  Insert  

                          {/* <FaArrowDown className="arrow"/>  */}
                        </button> 
                    <button className="regenerate_Button">
                       <img src={refresh} alt="refresh" className="refresh ml-3"/> Regenerate  
                       
                       
                       {/* <SlRefresh className="refresh ml-3"/> */}
                        </button>    
                    </div>
                </div> }
            </div>

            <div className="wand_Container">
              <img src={wand} alt="wand" className="wand" onClick={handleWand}/> 
              
               {/* <PiMagicWandFill onClick={handleWand} className="wand" /> */}
            </div>  
        </div>
    )
}

export default Extension;
