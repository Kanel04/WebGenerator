import React from 'react'
import { motion } from 'framer-motion';
import { LinkButton, LinkButtonSecond, LinkButtonTertiaire } from "../../components/common/Buttons";
import Avatar from "../../assets/images/Avatar.png";
function profile() {
  
  return (
    <motion.div className='bg-gray-300 w-full h-screen top-0 left-0 '
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}

    >
      
      <div className='bg-gray-300 text-gray-300'>p</div>
      <div className='bg-slate-900 flex flex-col mt-9 w-96 h-96 ml-96 px-9 rounded-2xl'>
        <h1 className="text-3xl text-white text-center mt-5">Profile</h1>
        <div className='flex flex-col'>
          <div>
            <div className="circle bg-white w-16 h-16 rounded-full">
              <img src="" alt="" className='hidden' />
            </div>
            <input type="file" hidden />
          </div>
          
        <label htmlFor="firstname" className='text-white mt-5'>Nom:</label>
        <label htmlFor="lastname" className='text-white mt-5'>Prénom:</label>
        <label htmlFor="email" className='text-white mt-5'>Email:</label>
        <label htmlFor="password" className='text-white mt-5'>Mot de passe:</label>
        </div>
        <div className='flex flex-row mt-11 bg-white w-28 rounded-full'>
          <LinkButton page="/primary"> <p className='text-black ml-3 text-lg'>Retour</p></LinkButton>
        </div>
      </div>
    </motion.div>
  )
}

export default profile