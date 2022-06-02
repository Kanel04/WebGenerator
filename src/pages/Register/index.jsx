import axios from 'axios'
import React, { useState } from 'react'
import {BASE_URL} from '../../constant/url'
import { Button , Input , LinkButton} from '../../components/common/Buttons'
import { useNavigate } from "react-router-dom";
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
                alert("Vous êtes inscrit");
                setFirstname("");
                setLastname("");
                setEmail("");
                setPassword("");
                setConfirmPassword("");
                navigate("/createproject");
            }

            history.push("/");
        } catch (error) {
            setError(error.response.data.error);
            setTimeout(() => {
                setError("");
            }, 5000);
        }
    };



    // const [project, setproject] = useState("")
    // const RegisterProject = () => {
    //     axios.post(`http://localhost:5000/api/v1/auth/register`, { project }).then((data) => console.log(data)).catch(err => console.error(err))
    // }


    return (
        <div className=' bg-gray-300 w-full h-screen top-0 left-0'>
            <form onSubmit={registerHandler} >
        <div className=' shadow-2xl max-w-lg mx-auto  w-5/6 h-screen  bg-slate-900 flex flex-col items-center justify-center '>
            <div className="mb-2   mt-5 flex flex-col items-center justify-center">
                <h1 className="text-white font-sans text-3xl">S'inscrire</h1>
                <h2 className="text-white font-sans text-xl mt-2">Remplissez pour votre information</h2>
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
            <LinkButton page="/">Cliquez ici si vous voulez retourner.</LinkButton>
            <Button type="submit">S'authentifier</Button>
            
        </div>
            </form>
        </div>
    )
}

export default RegisterPage