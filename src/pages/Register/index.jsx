import axios from 'axios'
import React, { useState } from 'react'
import {BASE_URL} from '../../constant/url'
import { Button , Input , LinkButton} from '../../components/common/Buttons'
import { useNavigate } from "react-router-dom";
import { motion } from 'framer-motion';
import  toast  from 'react-hot-toast'

const RegisterPage = ({history}) => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");


    let navigate = useNavigate();

    const registerHandler = async (e) => {
        e.preventDefault();

        const config = {
            header: {
                "Content-Type": "application/json",
            },
        };

        if (password !== confirmpassword) {
            setPassword("");
            setConfirmPassword("");
            setTimeout(() => {
                setError("");
            }, 5000);
            return setError("Votre mot de passe doit être la même que celle de confirmation");
        }

        try {
            const { data } = await axios.post(
                `${BASE_URL}/api/v1/auth/register`,
                {
                    firstname,
                    lastname,
                    email,
                    password,
                },
                config
            );

            localStorage.setItem("authToken", data.token);

            if (localStorage.getItem("authToken")){
                setFirstname("");
                setLastname("");
                setEmail("");
                setPassword("");
                setConfirmPassword("");
                toast.success(`${firstname} ${lastname} vous êtes inscrit`)
                navigate("/project");
            }

            history.push("/");
        } catch (error) {
            setError(error.response.data.error);
            setTimeout(() => {
                setError("");
                toast.error(`identification no validé`)
            }, 5000);
        }
    };




    return (
        <motion.div className=' bg-gray-300 w-full h-screen top-0 left-0'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}

        >
            <form onSubmit={registerHandler} >
        <div className=' shadow-2xl max-w-lg mx-auto  w-5/6 h-screen  bg-slate-900 flex flex-col items-center justify-center '>
            <div className="mb-2   mt-5 flex flex-col items-center justify-center">
                <motion.h1 className="text-white font-sans text-3xl"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.5, duration: 1.5 }}
                >S'inscrire</motion.h1>
                <motion.h2 className="text-white font-sans text-xl mt-2"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 2.5, duration: 1.5 }}
                >Remplissez pour votre information</motion.h2>
                        {error && <span className="text-white  bg-red-700 h-12 rounded-xl w-96 mt-5 px-2 ">{error}</span>}
            </div>
             
            <Input 
            type="text" 
            placeholder="Votre Nom"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
            />
            <Input 
             type="text" 
             placeholder='Votre Prénom '
             value={lastname}
             onChange={(e) => setLastname(e.target.value)}
             />
            <Input 
            type="text"  
            placeholder='Votre Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
            <Input type="password"
             placeholder='Votre Mot de Passe' 
             value={password}
             onChange={(e) => setPassword(e.target.value)}
             />
            <Input 
            type="password" 
            placeholder='Confimer Votre Mot de Passe'
            value={confirmpassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            />
           
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                    >
                        <LinkButton page="/">Cliquez ici si vous voulez retourner.</LinkButton>
                    </motion.div>
            <motion.div
                        whileHover={{ scale: 1.1 }}
            >
                        <Button type="submit">S'authentifier</Button>
            </motion.div>
        </div>
            </form>
        </motion.div>
    )
}

export default RegisterPage