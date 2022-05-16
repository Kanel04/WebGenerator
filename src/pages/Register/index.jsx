import axios from 'axios'
import React, { useState } from 'react'
import { Button , Input , LinkButton} from '../../components/common/Buttons'
import Avatar from '../../assets/images/Avatar.png';
const RegisterPage = () => {
    const [project, setproject] = useState("")
    const RegisterProject = () => {
        axios.post(`http://localhost:5000/`, { project }).then((data) => console.log(data)).catch(err => console.error(err))
    }

    return (
        <div className=' bg-gray-300 w-full h-screen top-0 left-0'>
        <div className=' shadow-2xl max-w-lg mx-auto  w-5/6 h-screen  bg-slate-900 flex flex-col items-center justify-center '>
            <div className="mb-2   mt-5 flex flex-col items-center justify-center">
                <h1 className="text-white font-sans text-3xl">S'inscrire</h1>
                <h2 className="text-white font-sans text-xl mt-2">Remplissez pour votre information</h2>
                    
            </div>
             
            <Input type="hidden" onChange={(e) => {
                setproject(e.target.value)
            }} />
            <Input type="text" onChange={(e) => {
                setproject(e.target.value)
            }} placeholder='Votre Nom ' />
            <Input type="text" onChange={(e) => {
                setproject(e.target.value)
            }} placeholder='Votre Email' />
            <Input type="password" onChange={(e) => {
                setproject(e.target.value)
            }} placeholder='Votre Mot de Passe' />
            <Input type="password" onChange={(e) => {
                setproject(e.target.value)
            }} placeholder='Confimer Votre Mot de Passe' />
            <LinkButton page="/">Cliquez ici si vous voulez retourner.</LinkButton>
            <Button onClick={RegisterProject}>S'authentifier</Button>
        </div>
        </div>
    )
}

export default RegisterPage