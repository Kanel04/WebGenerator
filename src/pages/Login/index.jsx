import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { BASE_URL } from '../../constant/url'
import { Button, Input, LinkButton } from '../../components/common/Buttons'


const LoginPage = ({ history }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

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
            history.push("/");
        } catch (error) {
            setError(error.response.data.error);
            setTimeout(() => {
                setError("");
            }, 5000);
        }
    };

    return (
       
<>
            <div className='bg-gray-300'></div>
            <div className=' bg-gray-300 w-full h-sreen top-0 left-0'>
                <form onSubmit={loginHandler}>
        <div className=' shadow-lg max-w-lg mx-auto  w-5/6 h-screen   bg-slate-900 flex flex-col items-center justify-center '>
            <div className="mb-16 flex flex-col items-center justify-center">
            <h1 className="text-white font-sans text-3xl">Bienvenue dans WebGenerator</h1>
            <h2 className="text-white font-sans text-xl mt-2">Remplissez pour votre  authantification</h2>
            <h1 className="text-white font-sans text-3xl mt-8">Connexion</h1>
            {error && <span className="text-white text-xl">{error}</span>}
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
                   
            <LinkButton page="/register">Cliquez ici si vous n'avez pas de compte.</LinkButton>
                    <LinkButton page="/passwordforget">Mot de passe Oublier?</LinkButton>
                        <Button type="submit" >Se connecter</Button>
        </div>
                </form>
        </div>
        </>
          )
}

export default LoginPage