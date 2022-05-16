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
             <main className='bg-gray-500  h-screen'>
                        <div className="bg-slate-900 h-16   flex flex-row">

                            <h1 className="text-3xl  text-white ml-3 py-3   ">WebG.</h1>
                        <div className='ml-80 pl-80'>
                            <input type="text" className='w-96 h-9 mt-3 py-2  px-6 rounded-full' placeholder='Recherche' />
                            </div>
                            <div className=" ml-1 pl-1 mt-2  ">
                           
                                <LinkButton page="/">Se déconnecter</LinkButton>
        
                            </div>
<div className='bg-white rounded-full w-9 h-9 mt-3'>
                            <img src={Avatar} className="rounded-full" alt="Avatar" />
</div>

                        </div>
                    <div className='flex flex-row'>
                 <Board id="board-1" className="mt-5 bg-white w-96 px-5 h-screen">
                            <Card id="card-1" className="text-white bg-black w-24 cursor-pointer" >
                        Card One
                     </Card>
                 </Board>
                    <Board id="board-2" className=" bg-white ml-16 mt-16  w-screen items-center h-screen">
                            <Card id="card-2" className="bg-blue-200 w-24 cursor-pointer"  >
                            <p>Card two</p>
                        </Card>
                    </Board>
                    <div className='mt-5 bg-white h-screen ml-16 w-96'>tools</div>
                    </div>
             </main>
             </div>
        </>
    )
}

export default PrimaryPage