import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import {BASE_URL} from '../../constant/url';
import { motion } from 'framer-motion';
import { BiPencil } from "react-icons/bi";
import { LinkButton, LinkButtonSecond, LinkButtonTertiaire } from "../../components/common/Buttons";
import Avatar from "../../assets/images/Avatar.png";
import  toast  from 'react-hot-toast';
function profile() {
  //show input 
  const showInput = () => {
    const boutton = document.getElementById("Button_id");
    const input = document.getElementById("Input_id");
    const input2 = document.getElementById("Input_id2");
    const input3 = document.getElementById("Input_id3");
    const input4 = document.getElementById("Input_id4");
    const para1 = document.getElementById('p');
    const para2 = document.getElementById('p2');
    const para3 = document.getElementById('p3');
    const para4 = document.getElementById('p4');
    para1.classList.add('hidden');
    para2.classList.add('hidden');
    para3.classList.add('hidden');
    para4.classList.add('hidden');
    input.classList.remove('hidden');
    input2.classList.remove('hidden');
    input3.classList.remove('hidden');
    input4.classList.remove('hidden');
    boutton.classList.remove('hidden');

 
      }

//get the user in data base
const [firstname, setFirstname] = useState("");
const [lastname, setLastname] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [error, setError] = useState("");


let navigate = useNavigate();

const profilHandler = async (e) => {
    e.preventDefault();

    const config = {
        header: {
            "Content-Type": "application/json",
        },
    };

    try {
        const { data } = await axios.get(
            `${BASE_URL}/api/v1/users/:id`,
            {
                firstname,
                lastname,
                email,
                password,
            },
            config
        );

        localStorage.setItem("authToken", data.token);

        history.push("/");
    } catch (error) {
        setError(error);
        setTimeout(() => {
            setError("");
            toast.error(`identification non indentifier`)
        }, 5000);
    }
};


  return (
    <motion.div className='bg-gray-300 w-full h-screen top-0 left-0 '
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}

    >
      
      <div className='bg-gray-300 text-gray-300'>p</div>
      <div className='bg-slate-900 flex flex-col mt-9 w-96 h-sreen ml-96 px-9 rounded-2xl'>
        <form onSubmit={profilHandler}>
        <h1 className="text-3xl text-white text-center mt-5">Profile</h1>
        <div className='flex flex-col'>
          
        <label  className='text-white mt-5'>Nom:</label>
    <div className='flex flex-row'>
    <p 
    id='p'
    className='text-white'
    >{firstname}</p>
      <BiPencil id='Icon_id' onClick={showInput}  className=" ml-5 cursor-pointer"></BiPencil>
        <input type="text" id='Input_id' className='hidden ml-3 h-7 mt-2 px-3 rounded-xl'/>
    </div>
        <label  className='text-white mt-5'>Prénom:</label>
     <div className='flex flex-row' >
     <p 
     id='p2'
     className='text-white'
     >{lastname}</p>
      <BiPencil id='Icon_id2' onClick={showInput} className="  ml-5 cursor-pointer"></BiPencil>
        <input type="text" id='Input_id2' className='hidden ml-3 h-7 mt-2 px-3 rounded-xl'/>
    </div>
        <label  className='text-white mt-5'>Email:</label>
    <div className='flex flex-row'>
    <p 
    id='p3' 
    className='text-white'
    >{email}</p>
      <BiPencil id='Icon_id3' onClick={showInput}  className=" ml-5 cursor-pointer"></BiPencil>
        <input type="text" id='Input_id3' className='hidden ml-3 h-7 mt-2 px-3 rounded-xl'/>
    </div>
        <label  className='text-white mt-5'>Mot de passe:</label>
    <div className='flex flex-row'>
      <p 
      id='p4' 
      className='text-white'
      >{password}</p>
      <BiPencil id='Icon_id4' onClick={showInput} className=" ml-5 cursor-pointer"></BiPencil>
        <input type="password" id='Input_id4' className='hidden ml-3 h-7 mt-2 px-3 rounded-xl'/>
    </div>
        </div>
        <div className='flex flex-row '>
          <LinkButton page="/primary"className='mt-9 bg-white  w-28 h-10 rounded-full text-black px-6 py-2 text-lg'>Retour</LinkButton>
          <div className='ml-5 m-9 mt-5 py-5'>
          <button type="submit" id='Button_id' className=' bg-red-700 h-10  w-28 py-2 rounded-full text-white'>Modifier</button>
          </div>
          
        </div>
        </form>
      </div>
    </motion.div>
  )
}

export default profile