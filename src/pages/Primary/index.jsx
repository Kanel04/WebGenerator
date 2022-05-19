import axios from 'axios'
import { LinkButton, LinkButtonSecond, LinkButtonTertiaire } from "../../components/common/Buttons";
import React, { useState } from 'react'
import Board from '../../components/Boards'
import Card from '../../components/Boards'
import Avatar from "../../assets/images/Avatar.png";
const PrimaryPage = () => {
    const [project, setproject] = useState("")
    const PrimaryProject = () => {
        axios.post(`http://localhost:5000/`, { project }).then((data) => console.log(data)).catch(err => console.error(err))
    }

    return (

        <>
        
         <div className="flex flex-col">
             <div className='bg-gray-500 h-screen'>
                        <div className="bg-slate-900 h-16   flex flex-row">

                            <h1 className="text-3xl  text-white ml-3 py-3">WebG.</h1>
                        <div className='ml-80 pl-80'>
                            <input type="text" className='w-96 h-9 mt-3 py-2  px-6 rounded-full' placeholder='Recherche' />
                            </div>
                            <div className=" ml-1 pl-1 mt-2  ">
                           
                                <LinkButton page="/">Se déconnecter</LinkButton>
        
                            </div>
                            <LinkButton page="/profile">
                            <div className='bg-white rounded-full w-9 h-9 mt-1 cursor-pointer'>
                           <label >  
                                    <img src={Avatar} className="rounded-full cursor-pointer" alt="Avatar" />
                            </label>
                         </div>
                    </LinkButton>
                        </div>
                    <div className='flex flex-row'>
                        <div className='mt-5 bg-white rounded-r-lg text-center h-screen  w-96'>
                            <h1 className="text-2xl mt-4">Template</h1>

                              <Board id="board-1" className="mt-5">
                            <Card id="card-1" className="text-white bg-black w-24 cursor-pointer" >
                                Card One
                            </Card>
                        </Board></div>
               
                    <Board id="board-2" className=" bg-white ml-16 mt-16  w-screen items-center h-screen">
                            <Card id="card-2" className="bg-blue-200 w-24 cursor-pointer"  >
                            <p>Card two</p>
                        </Card>
                    </Board>
                        <div className='mt-5 bg-white rounded-l-lg  h-screen ml-16 w-96'>
                            <h1 className='text-2xl text-center mt-4'>Outils</h1>
                            <h1 className='text-xl ml-3 mt-5'>boutton:</h1>
                            <Board id='tols' className='ml-5'>
                        <Card className="w-24 mt-2 ml-8">
                            <button className='bg-red-900 w-24 h-8  text-white' >boutton</button>
                        </Card>
                            </Board>
                        </div>
                    </div>
             </div>
             </div>
        </>
    )
}

export default PrimaryPage