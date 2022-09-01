import React from 'react';
import {Link} from 'react-router-dom';
import {motion , AnimatePresence} from 'framer-motion';

const Modal=({showModal, setShowModal}) => {
  return (
    <div className="">
       <div className='flex flex-col items-center mt-40'>
<h1 className='text-3xl'>Vous êtes inscrit</h1>
<button className='bg-slate-900 text-white h-10 rounded-full w-40 mt-5' >
  
          <Link to="/project">Continuer</Link>
  </button>
       </div>
    </div>
  )
}
 export default Modal
