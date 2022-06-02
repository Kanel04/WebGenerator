import axios from 'axios'
import React, { useState } from 'react'
import { Button, Input, LinkButton } from '../../components/common/Buttons'
import { BASE_URL } from '../../constant/url'
const PasswordForgetPage = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const forgotPasswordHandler = async (e) => {
    e.preventDefault();

    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

    try {
      const { data } = await axios.post(
        `${BASE_URL}/api/v1/auth/forgotpassword`,
        { email },
        config
      );

      setSuccess(data.data);
    } catch (error) {
      setError(error.response.data.error);
      setEmail("");
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  return (

    <>
      <div className=' bg-gray-300 w-full h-screen top-0 left-0'>
         <form onSubmit={forgotPasswordHandler}>
        <div className=' shadow-lg max-w-lg mx-auto  w-5/6 h-screen   bg-slate-900 flex flex-col items-center justify-center '>
          <div className="mb-16 flex flex-col items-center justify-center">
            <h1 className="text-white font-sans text-3xl">Mot de passe Oublier</h1>
            <h2 className="text-white font-sans text-2xl mt-2">Entrer Votre Email</h2>
            <h1 className="text-white font-sans text-xl mt-2">Pour trouver Votre Compte</h1>
              {error && <span className="text-white  bg-red-700 h-12 rounded-xl w-96 mt-5 px-2">{error}</span>}
              {success && <span className="text-white  bg-green-700 h-12 rounded-xl w-96 mt-5 px-2">{success}</span>}
          </div>

          <Input 
              type="email"
              required
              id="email"
              placeholder="Votre Adresse Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
          />
          <LinkButton page="/login">Cliquez ici si Vous voulez retourner.</LinkButton>
            <Button type="submit" >Envoyer l' Email</Button>
        </div>
        </form>
      </div>
    </>
  )
}

export default PasswordForgetPage