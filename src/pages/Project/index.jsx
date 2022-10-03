import axios from 'axios'
import React, { useState } from 'react'
import { BASE_URL } from '../../constant/url'
import { Button , Input ,LinkButton  } from '../../components/common/Buttons'
import Photo from '../../assets/images/Café.jpg'
import Avatar from '../../assets/images/Avatar.png'
import { motion } from 'framer-motion';
import { useNavigate } from "react-router-dom";
import  toast  from 'react-hot-toast'
const ProjectPage = (history) => {

    const [project, setProjectname] = useState("");
    
    let navigate = useNavigate();
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const ProjectHandler = async (e) => {
        e.preventDefault();

        const config = {
            header: {
                "Content-Type": "application/json",
            },
        };

        try {
            const { data } = await axios.post(
                `${BASE_URL}/api/createProject`,
                { project },
                config
            );

         setSuccess(data.data);
         toast.success(`${project} est créer`);
   
         navigate("/primary");

               


            history.push("/");
        } catch (error) {
            setError(error.response.data.error);
            setTimeout(() => {
                setError("");
                toast.error("Création non validé")
            }, 5000);
        }
    };



    return (
        <motion.div className='flex-col'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}

        >
        <div className=' flex-col '>
                <motion.div className="bg-slate-900 h-16   flex flex-row"
                    initial={{ y: -20 }}
                    animate={{ y: 0 }}
                    transition={{ delay: 0.2, type: 'spring', stiffness: 120 }}
                >

                    <h1 className="text-3xl  text-white ml-3 py-3   ">WebG.</h1>
<div className='ml-80 w-60'></div>
                    <motion.div className=" ml-96  mt-2  "
                        whileHover={{ scale: 1.1 }}
                    >

<LinkButton page="/primary">Espace de travail</LinkButton>
</motion.div>
                   <motion.div
                   className='mt-2'
                     whileHover={{ scale: 1.1 }}
                   >
                   <button className='text-white' onClick={()=>{localStorage.removeItem("userId"); navigate("/")}}>se deconnecter</button>
     
                   </motion.div>
      

     
                    <div className='  mt-1'>
                        <LinkButton page="/profile"><img src={Avatar} className=" rounded-full w-9 h-9 " alt="Avatar" /></LinkButton>
                        
                    </div>

                </motion.div>
                
            <div className='flex row  bg-slate-500 '>
                    <form onSubmit={ProjectHandler}>
                    <div className='pt-28 ml-28 w-60'>
                        <motion.h1 className='text-white  text-3xl h-15 py-3'
                            initial={{ x: -20 }}
                            animate={{ x: 0 }}
                            transition={{ delay: 0.5, type: 'spring', stiffness: 120 }}
                        >Création de votre projet</motion.h1> 
            <div className='bg-slate-500 '>
                            <Input
                                type="text"
                                placeholder="Le nom de votre projet"
                                value={project}
                                onChange={(e) => setProjectname(e.target.value)}
                            />
            </div>
            <div className='bg-slate-500 '>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                >
                                    <Button type="submit">Créer</Button>
                                
                </motion.div>
         
                        </div>
                    
                        </div>
                    </form>      
                  <div className='ml-9 w-20'></div>
                        <div>
                            
                            <img className='ml-80 h-screen' src={Photo} alt="Photo" />
                        </div>
                </div>
        </div>
              </motion.div>
    )
}

export default ProjectPage