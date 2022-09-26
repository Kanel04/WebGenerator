import React from 'react'
import { IconContext } from 'react-icons';
import { GrTemplate } from "react-icons/gr";

export default function Commons() {
  const showInput = () => {
const boutton = document.getElementById("Button_id")
const icon = document.getElementById("Icon_id");
const input = document.getElementById("Input_id");
input.classList.remove('hidden');
icon.classList.add('hidden');
boutton.classList.remove('hidden');
  }
  return (
    <div>
      <GrTemplate id='Icon_id' onClick={showInput} className="mt-5 ml-5 cursor-pointer"></GrTemplate>
        <input type="text" id='Input_id' className='hidden rounded-xl'/>
    </div>
  )
}
