import axios from 'axios'
import React, { useState } from 'react'
import { Button, Input, LinkButton } from '../../components/common/Buttons'
import { motion } from 'framer-motion';


const ConfirmPasswordPage = () => {
    const [project, setproject] = useState("")
    const confirmPasswordProject = () => {
        axios.post(`http://localhost:5000/`, { project }).then((data) => console.log(data)).catch(err => console.error(err))
    }

    return (


        <motion.div className=' bg-gray-300 w-full h-screen top-0 left-0'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}

        >
            <div className=' shadow-lg max-w-lg mx-auto  w-5/6 h-screen   bg-slate-900 flex flex-col items-center justify-center '>
                <div className="mb-16 flex flex-col items-center justify-center">
                    <motion.h1 className="text-white font-sans text-3xl"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.5, duration: 1.5 }}
                    >Mot de Passe Oublier</motion.h1>
                    <motion.h2 className="text-white font-sans text-xl mt-2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 2.5, duration: 1.5 }}
                    >Confirmer Votre Mot de Passe</motion.h2>

                </div>

                <Input type="password" onChange={(e) => {
                    setproject(e.target.value)
                }} placeholder='Votre Nouveau Mot de Passe' />
                <Input type="password" onChange={(e) => {
                    setproject(e.target.value)
                }} placeholder='Confirmer Votre Mot de Passe ' />
                <motion.div
                    whileHover={{ scale: 1.1 }}
                >
                    <LinkButton page="/">Cliquez ici si Vous voulez retourner.</LinkButton>
                </motion.div>
<motion.div
                    whileHover={{ scale: 1.1 }}
>
                    <Button onClick={confirmPasswordProject} >Confirm</Button>
</motion.div>
               
            </div>
        </motion.div>
    )
}

export default ConfirmPasswordPage