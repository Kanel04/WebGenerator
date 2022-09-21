import axios from "axios";
import React, { useState } from 'react'
import { Button, Input, LinkButton } from '../../components/common/Buttons'
import { motion } from 'framer-motion';
import { BASE_URL } from "../../constant/url";

const ConfirmPasswordPage = () => {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const resetPasswordHandler = async (e) => {
        e.preventDefault();
    
        const config = {
          header: {
            "Content-Type": "application/json",
          },
        };
    
        if (password !== confirmPassword) {
          setPassword("");
          setConfirmPassword("");
          setTimeout(() => {
            setError("");
          }, 5000);
           setError("Mot de passe différent");
        }
    
        try {
          const { data } = await axios.put(
            `${BASE_URL}/api/v1/auth/forgotpassword${match.params.resetToken}`,
            {
              password,
            },
            config
          );
    
          console.log(data);
          setSuccess(data.data);
        } catch (error) {
          setError(error);
          setTimeout(() => {
            setError("");
          }, 5000);
        }
      };

    return (


        <motion.div className=' bg-gray-300 w-full h-screen top-0 left-0'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}

        >
            <form onSubmit={resetPasswordHandler}>
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
                     {error && <span className="bg-red-700 text-white h-9 font-bold w-80 text-center px-3 mt-2 rounded-xl">Veuillez reécrire votre mot de passe </span>}
        {success && (
          <span className="bg-green-700 text-white h-9 font-bold w-80 text-center px-3 mt-2 rounded-xl">
            veillez continuer avec la page de  <Link to="/login" className="cursor-pointer text-red-500">Connexion</Link>
          </span>
        )}

                </div>

                <Input
                 type="password"
                 required
                 id="password"
                 autoComplete="true"
                 value={password}
                 onChange={(e) => setPassword(e.target.value)}
                 placeholder='Votre Nouveau Mot de Passe'
                  />
                <Input 
                 type="password"
                 required
                 id="confirmpassword"
                 autoComplete="true"
                 value={confirmPassword}
                 onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder='Confirmer Votre Mot de Passe ' 
                />
                <motion.div
                    whileHover={{ scale: 1.1 }}
                >
                    <LinkButton page="/">Cliquez ici si Vous voulez retourner.</LinkButton>
                </motion.div>
<motion.div
                    whileHover={{ scale: 1.1 }}
>
                    <Button type="submit" >Confirm</Button>
</motion.div>

            </div>
            </form>
        </motion.div>
    )
}

export default ConfirmPasswordPage