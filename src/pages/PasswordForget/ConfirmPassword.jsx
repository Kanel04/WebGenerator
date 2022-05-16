import axios from 'axios'
import React, { useState } from 'react'
import { Button, Input, LinkButton } from '../../components/common/Buttons'


const ConfirmPasswordPage = () => {
    const [project, setproject] = useState("")
    const confirmPasswordProject = () => {
        axios.post(`http://localhost:5000/`, { project }).then((data) => console.log(data)).catch(err => console.error(err))
    }

    return (


        <div className=' bg-gray-300 w-full h-screen top-0 left-0'>
            <div className=' shadow-lg max-w-lg mx-auto  w-5/6 h-screen   bg-slate-900 flex flex-col items-center justify-center '>
                <div className="mb-16 flex flex-col items-center justify-center">
                    <h1 className="text-white font-sans text-3xl">Mot de Passe Oublier</h1>
                    <h2 className="text-white font-sans text-xl mt-2">Confirmer Votre Mot de Passe</h2>

                </div>

                <Input type="password" onChange={(e) => {
                    setproject(e.target.value)
                }} placeholder='Votre Nouveau Mot de Passe' />
                <Input type="password" onChange={(e) => {
                    setproject(e.target.value)
                }} placeholder='Confirmer Votre Mot de Passe ' />

                <Button onClick={confirmPasswordProject} >Confirm</Button>
            </div>
        </div>
    )
}

export default ConfirmPasswordPage