import axios from 'axios'
import React, { useState } from 'react'
import { Button , Input ,LinkButton  } from '../../components/common/Buttons'
import Photo from '../../assets/images/Café.jpg'
import Avatar from '../../assets/images/Avatar.png'
import { motion } from 'framer-motion';

const ProjectPage = () => {
    const [project, setproject] = useState("")
    const createProject = () => {
        axios.post(`http://localhost:5000/api/createProject`, 
        { project }).then((data) => console.log(data)).catch(err => console.error(err))
    }

    return (
        <div className='flex-col'>
        <div className=' flex-col '>
                <motion.div className="bg-slate-900 h-16   flex flex-row"
                    initial={{ y: -20 }}
                    animate={{ y: 0 }}
                    transition={{ delay: 0.2, type: 'spring', stiffness: 120 }}
                >

                    <h1 className="text-3xl  text-white ml-3 py-3   ">WebG.</h1>
<div className='ml-80'></div>
                    <motion.div className=" ml-96 pl-80 mt-2  "
                        whileHover={{ scale: 1.1 }}
                    >

                        <LinkButton page="/">Se déconnecter</LinkButton>

                    </motion.div>
                    <div className=' ml-8 mt-1'>
                        <LinkButton page="/profile"><img src={Avatar} className=" rounded-full w-9 h-9 " alt="Avatar" /></LinkButton>
                        
                    </div>

                </motion.div>
            <div className='flex row  bg-slate-500 '>
                    <div className='pt-28 ml-28 w-60'>
                        <motion.h1 className='text-white  text-3xl h-15 py-3'
                            initial={{ x: -20 }}
                            animate={{ x: 0 }}
                            transition={{ delay: 0.5, type: 'spring', stiffness: 120 }}
                        >Création de votre projet</motion.h1> 
            <div className='bg-slate-500 '>
            <Input type="text" onChange={(e) => {
                setproject(e.target.value)
            }} placeholder='Le nom de votre projet' />
            </div>
            <div className='bg-slate-500 '>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                >
                                <Button onClick={createProject}>Créer</Button>
                </motion.div>
         
                        </div>
                        </div>
                    <div className='ml-16'></div>
                        <div>
                            
                            <img className='ml-96 ' src={Photo} alt="Photo" />
                        </div>
                </div>
        </div>
              </div>
    )
}

export default ProjectPage