import axios from 'axios'
import React, { useState } from 'react'
import { Button , Input ,LinkButton  } from '../../components/common/Buttons'
import Photo from '../../assets/images/Café.jpg'
import Avatar from '../../assets/images/Avatar.png'

const ProjectPage = () => {
    const [project, setproject] = useState("")
    const createProject = () => {
        axios.post(`http://localhost:5000/api/createProject`, { project }).then((data) => console.log(data)).catch(err => console.error(err))
    }

    return (
        <div className='flex-col'>
        <div className=' flex-col '>
                <div className="bg-slate-900 h-16   flex flex-row">

                    <h1 className="text-3xl  text-white ml-3 py-3   ">WebG.</h1>
<div className='ml-80'></div>
                    <div className=" ml-96 pl-96 mt-2  ">

                        <LinkButton page="/">Se déconnecter</LinkButton>

                    </div>
                    <div className='bg-white rounded-full w-9 h-9 mt-3'>
                        <img src={Avatar} className="rounded-full" alt="Avatar" />
                    </div>

                </div>
            <div className='flex row  bg-slate-500 '>
                    <div className='pt-28 ml-28 w-60'>
                        <h1 className='text-white  text-3xl h-15 py-3'>Création de votre projet</h1> 
            <div className='bg-slate-500 '>
            <Input type="text" onChange={(e) => {
                setproject(e.target.value)
            }} placeholder='Le nom de votre projet' />
            </div>
            <div className='bg-slate-500 '>
            <Button onClick={createProject}>Créer</Button>
                        </div>
                        </div>
                    <div className='ml-16'></div>
                        <div>
                            
                            <img className='ml-96 ' src={Photo} alt="Photo" />
                        </div>
                </div>
        </div>
              </div>
    )
}

export default ProjectPage