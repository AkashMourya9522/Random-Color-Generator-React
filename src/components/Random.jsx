import { useState } from "react"


export default function Random(){

    const [color,setColor] = useState("#ffffff")

    function generateHexColor(){
        let newColor = '#';
        let alphabets = ['a','b','c','d','e','f',1,2,3,4,5,6,7,8,9,0]
        for(let i=0; i<6; i++){
            newColor+=alphabets[generateRandomRgb(16)];
        }
        setColor(newColor)
    }

    function generateRandomRgb(num){
        return Math.floor(Math.random()*num)
    }

    function generateRgbColor(){
        let newColor =  `rgb(${generateRandomRgb(255)},${generateRandomRgb(255)},${generateRandomRgb(255)})` ;
        setColor(newColor)
    }

    return <div style={{backgroundColor:color}} className={`h-screen w-screen p-5 flex justify-around items-center`}>
        <h1 className="text-3xl font-bold">{color}</h1>
        <button className="p-5 border-solid border-2 rounded-3xl border-black hover:bg-black hover:text-white transition-all duration-700" onClick={generateHexColor}>Random Hex color</button>
        <button className="p-5 border-solid border-2 rounded-3xl border-black hover:bg-black hover:text-white transition-all duration-700" onClick={generateRgbColor} >Random RGB color</button>
    </div>
}