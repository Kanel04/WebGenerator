import axios from 'axios'
import {Link} from 'react-router-dom';
import React, { useState } from 'react';
import Draggable from "react-draggable";
import { motion } from 'framer-motion';
import DropZoneComponent from '../../components/DropZoneComponent';
import Template from './components/template/template';
import Navbar from './components/navbar/navbar';
import SideBar from './components/sidebar/sidebar';
import SideBarRight from './components/sideBarRight/sideBarRight';
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
        let image = document.getElementById("fileImageFile").value;
         
    }
    const [sidebar,setSideBar] = useState(false);

    const showSidebar = () => setSideBar(!sidebar);


    return (

        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}

        >
            <Navbar></Navbar>
            <div>
                <div className='bg-gray-700 h-screen flex flex-col'>
                        <div className='flex flex-row'>
                        <SideBar></SideBar>
                        <div className='bg-gray-700 w-28'></div>
                        <div id="board-2" className=" bg-white  mt-36  w-screen items-center h-screen">
                            <DropZoneComponent></DropZoneComponent>
                        </div>
                        <div className='bg-gray-700 w-28'></div>
                        
                    <SideBarRight></SideBarRight>
                    </div>

                </div>
            </div>
        </motion.div>
    )
}

export default PrimaryPage