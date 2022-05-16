import axios from 'axios'
import React, { useState } from 'react'
import { Button , Input , LinkButton } from '../../components/common/Buttons'

const LoginPage = () => {
    const [project, setproject] = useState("")
    const LoginProject = () => {
        axios.post(`http://localhost:5000/`, { project }).then((data) => console.log(data)).catch(err => console.error(err))
    }

    return (
       
<>
            <div className='bg-gray-300'></div>
            <div className=' bg-gray-300 w-full h-sreen top-0 left-0'>
        <div className=' shadow-lg max-w-lg mx-auto  w-5/6 h-screen   bg-slate-900 flex flex-col items-center justify-center '>
            <div className="mb-16 flex flex-col items-center justify-center">
            <h1 className="text-white font-sans text-3xl">Bienvenue dans WebGenerator</h1>
            <h2 className="text-white font-sans text-xl mt-2">Remplissez pour votre  authantification</h2>
                        <h1 className="text-white font-sans text-3xl mt-8">Connexion</h1>
            </div>
            
            <Input type="text" onChange={(e) => {
                setproject(e.target.value)
            }} placeholder='Votre Email' />
            <Input type="password" onChange={(e) => {
                setproject(e.target.value)
            }} placeholder='Votre Mot de passe' />
            <LinkButton page="/register">Cliquez ici si vous n'avez pas de compte.</LinkButton>
                    <LinkButton page="/passwordforget">Mot de passe Oublier?</LinkButton>
            <Button  onClick={LoginProject} >Se connecter</Button>
        </div>
        </div>
        </>
          )
}

export default LoginPage