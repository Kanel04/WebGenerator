import axios from 'axios'
import { LinkButton, LinkButtonSecond, LinkButtonTertiaire } from "../../components/common/Buttons";
import React, { useState } from 'react'
import Draggable from "react-draggable";
import Board from '../../components/Boards'
import Card from '../../components/Boards'
import Avatar from "../../assets/images/Avatar.png";
const PrimaryPage = () => {
    const [project, setproject] = useState("")
    const PrimaryProject = () => {
        axios.post(`http://localhost:5000/`, { project }).then((data) => console.log(data)).catch(err => console.error(err))
    }
    function changeColor() {
        let color = document.getElementById("colorInputColor").value;
        document.getElementById("colorInputText").value = color;
    }
    function importFile() {
        let file = document.getElementById("fileInputFile").value;
        document.getElementById("fileImageFile").value = file;
    }
    return (

        <>

            <div className="">
                <div className='bg-gray-700 h-screen flex flex-col'>
                    <div className="bg-slate-900 h-16 fixed w-screen flex flex-row">

                        <h1 className="text-3xl  text-white ml-3 py-3">WebG.</h1>
                        <div className='ml-60 pl-60'></div>
                        <div className=" ml-60 pl-10 mt-3  ">

                            <LinkButton page="/cloud">Mes projects</LinkButton>

                        </div>
                        <div className=" ml-1 pl-1 mt-5  ">

                            <button className='text-white'>enregistrer</button>

                        </div>
                        <div className=" ml-1 pl-1 mt-3  ">

                            <LinkButton page="/">Se déconnecter</LinkButton>

                        </div>

                        <LinkButton page="/profile">
                            <div className='bg-white rounded-full w-9 h-9 mt-2 ml-14 cursor-pointer'>
                                <label >
                                    <img src={Avatar} className="rounded-full cursor-pointer" alt="Avatar" />
                                </label>
                            </div>
                        </LinkButton>
                    </div>
                    <div className='flex flex-row'>
                        <div className='mt-28 bg-white rounded-r-lg text-center h-screen  w-96'>
                            <h1 className="text-2xl mt-4">Template</h1>
                            <div className="mt-5">
                                <label for="template" >Choisissez votre Template:</label>

                                <select name="template" id="template" className="w-40  mt-2 text-lg px-2 h-7 rounded-xl">
                                    <option value="header">header</option>
                                    <option value="navbar">navbar</option>
                                    <option value="sidebar">sidebar</option>
                                    <option value="article">article</option>
                                    <option value="CTA">CTA</option>
                                    <option value="root">root</option>
                                    <option value="footer">footer</option>
                                </select>
                            </div>
                            <div className='flex flex-col'>
                                <Draggable>
                                    <div className='bg-black text-white w-28 mt-5 ml-5 '>
                                        card
                                    </div>
                                </Draggable>
                                <Draggable>
                                    <div className='bg-black text-white w-28 mt-5 ml-5 '>
                                        card
                                    </div>
                                </Draggable>
                                <Draggable>
                                    <div className='bg-black text-white w-28 mt-5 ml-5 '>
                                        card
                                    </div>
                                </Draggable>
                            </div>

                        </div>
                        <div className='bg-gray-700 w-28'></div>
                        <div id="board-2" className=" bg-white  mt-36  w-screen items-center h-screen">

                        </div>
                        <div className='bg-gray-700 w-28'></div>
                        <div className='mt-28 bg-white rounded-l-lg  h-screen  w-96'>
                            <h1 className='text-2xl text-center mt-4'>Outils</h1>
                            <h1 className='text-xl ml-5 mt-5'>Boutton:</h1>
                            <div id='tols' className='ml-5'>

                                <Draggable>
                                    <button className='bg-slate-500 w-24 h-8  text-white' >boutton</button>
                                </Draggable>
                                <div className='mt-5 pr-5'>
                                    <h1 className='text-xl'>Texte:</h1>
                                    <input type="text" placeholder='texte ici' className=' mt-2 w-60 h-9 px-5 rounded-full' />

                                </div>
                                <div className="mt-5 flex flex-col">
                                    <h1 className="text-xl">Coleur:</h1>
                                    <div className='ml-3  '>
                                        <input type="color" className="cursor-pointer " id='colorInputColor' />
                                    </div>

                                    <input type="text" placeholder="code coleur" id='colorInputText' className="ml-2  rounded-full w-28 h-7 px-3" />
                                    <input type="button" id='colorButton' value='Changer le coleur' onClick={changeColor} className='mt-2 h-9 rounded-xl bg-slate-900 text-white' />
                                    <div className='m-2'>
                                        <label htmlFor="image" id="image" className='text-xl '>Image:</label>
                                        <input type="file" className='mt-2' id='fileInputFile'/>
                                        <div className='mt-5'>
                                           
                                            
                                        </div>
                                        <input type="button" onClick={importFile} id='fileButton' value="Importer l'image" className='mt-2 h-9 w-40 rounded-xl bg-slate-900 text-white'  />
                                    </div>
                                </div>
                                <button className='mt-2 bg-slate-900 w-40 h-10 text-white rounded-xl ml-15'>Ajouter</button>
                            </div>

                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}

export default PrimaryPage