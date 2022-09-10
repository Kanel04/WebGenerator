import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { BASE_URL } from '../../constant/url'
import { Button, Input, LinkButton } from '../../components/common/Buttons'
import {useNavigate} from "react-router-dom";
import { motion } from 'framer-motion';


const LoginPage = ({ history }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    
    let navigate = useNavigate();
    
   

    useEffect(() => {
        if (localStorage.getItem("authToken")) { 
            setEmail("");
            setPassword("");
        }
    }, [history]);

    const loginHandler = async (e) => {
        e.preventDefault();

        const config = {
            header: {
                "Content-Type": "application/json",
            },
        };

        try {
            const { data } = await axios.post(
                `${BASE_URL}/api/v1/auth/login`,
                { 
                    email, 
                    password 
                },
                config
            );

            localStorage.setItem("authToken", data.token);
            navigate("/createproject");
        } catch (error) {
            setError(error.response.data.error);
            setTimeout(() => {
                setError("Mot de Passe Incorrect ou Email Incorrect ");
            }, 5000);
        }
    };

    return (
       
<motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}

>
            <div className='bg-gray-300'></div>
            <div className=' bg-gray-300 w-full h-sreen top-0 left-0'>
                <form onSubmit={loginHandler}>
        <div className=' shadow-lg max-w-lg mx-auto  w-5/6 h-screen   bg-slate-900 flex flex-col items-center justify-center '>
            <div className="mb-16 flex flex-col items-center justify-center">
            <motion.h1 className="text-white font-sans text-3xl"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1.5, duration: 1.5 }}
            >Bienvenue dans WebGenerator</motion.h1>
            <motion.h2 className="text-white font-sans text-xl mt-2"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 2.5, duration: 1.5 }}
            >Remplissez pour votre  authantification</motion.h2>
            <motion.h1 className="text-white font-sans text-3xl mt-8"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 3.5, duration: 1.5 }}
            >Connexion</motion.h1>
            {error && <span className="text-white text-xl bg-red-700 rounded-xl h-14 w-96 mt-5 px-2 ">{error}</span>}
            </div>
            
                    <Input
                        type="email"
                        required
                        id="email"
                        placeholder="Entrer Votre Adresse Email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        tabIndex={1} />
            <Input
                        type="password"
                        required
                        id="password"
                        autoComplete="true"
                        placeholder="Entrer Votre Mot de Passe"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        tabIndex={2}
            />
                   <motion.div
                            whileHover={{ scale: 1.1 }}
                   >
                            <LinkButton page="/register">Cliquez ici si vous n'avez pas de compte.</LinkButton>
                   </motion.div>
          <motion.div
                            whileHover={{ scale: 1.1 }}
          >
                            <LinkButton page="/passwordforget">Mot de passe Oublier?</LinkButton>
          </motion.div>
            
                    <motion.div
                            whileHover={{ scale: 1.1 }}
                    >
                            <Button type="submit" >Se connecter</Button>
                    </motion.div>
                        
        </div>
                </form>
        </div>
        </motion.div>
          )
}

export default LoginPage