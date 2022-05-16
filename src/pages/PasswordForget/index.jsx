import axios from 'axios'
import React, { useState } from 'react'
import { Button, Input, LinkButton } from '../../components/common/Buttons'

const PasswordForgetPage = () => {
  const [project, setproject] = useState("")
  const passwordForgetProject = () => {
    axios.post(`http://localhost:5000/`, { project }).then((data) => console.log(data)).catch(err => console.error(err))
  }

  return (

    <>
      <div className=' bg-gray-300 w-full h-screen top-0 left-0'>
        <div className=' shadow-lg max-w-lg mx-auto  w-5/6 h-screen   bg-slate-900 flex flex-col items-center justify-center '>
          <div className="mb-16 flex flex-col items-center justify-center">
            <h1 className="text-white font-sans text-3xl">Mot de passe Oublier</h1>
            <h2 className="text-white font-sans text-2xl mt-2">Entrer Votre Email</h2>
            <h1 className="text-white font-sans text-xl mt-2">Pour trouver Votre Compte</h1>
          </div>

          <Input type="text" onChange={(e) => {
            setproject(e.target.value)
          }} placeholder='Votre Email' />
          <LinkButton page="/login">Cliquez ici si Vous voulez retourner.</LinkButton>
          <Button onClick={passwordForgetProject} >Envoyer l' Email</Button>
        </div>
      </div>
    </>
  )
}

export default PasswordForgetPage