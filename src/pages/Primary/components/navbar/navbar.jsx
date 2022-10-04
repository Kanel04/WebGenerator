import axios from 'axios'
import React, { useState } from 'react'
import { BASE_URL } from '../../../../constant/url'
import { LinkButton } from "../../../../components/common/Buttons";
import Avatar from "../../../../assets/images/Avatar.png";
import { useNavigate } from "react-router-dom";
import  toast  from 'react-hot-toast'
function Navbar() {
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
          const { data } = await axios.get(
              `${BASE_URL}/api/readProject`,
              { project },
              config
          );

       setSuccess(data.data);
       navigate("/cloud");

             


          history.push("/");
      } catch (error) {
          setError(error);
         
            toast.error("action non validé")
          
      }
  };



  return (
    <div >    
      <div className="bg-slate-900 h-16   flex flex-row">

      <h1 className="text-3xl  text-white ml-3 py-3">WebG.</h1>
      <div className='ml-60 pl-60'></div>
      <div className=" ml-60 pl-10 mt-3  ">
<form onSubmit={ProjectHandler}>
        <button type='submit' className='text-white'>Mes projects</button>
 </form>
      </div>
      <div className=" ml-1 pl-1 mt-3  ">

        <button className='text-white'>enregistrer</button>

      </div>
      <div className=" ml-1 pl-1 mt-3  ">

      <button className='text-white' onClick={()=>{localStorage.removeItem("userId"); navigate("/")}}>se deconnecter</button>
     

      </div>

      <LinkButton page="/profile">
        <div className='bg-white rounded-full w-9 h-9 mt-2 ml-14 cursor-pointer'>
          <label >
            <img src={Avatar} className="rounded-full cursor-pointer" alt="Avatar" />
          </label>
        </div>
      </LinkButton>
    </div>
 </div>
  )
}

export default Navbar